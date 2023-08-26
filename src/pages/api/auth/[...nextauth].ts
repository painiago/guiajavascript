import NextAuth from "next-auth";
import GoogleAuthProvider from "next-auth/providers/google";
import { query as q } from "faunadb";
import { fauna } from "@/services/fauna";
interface sessionAuth{
  session: string;
}
export default NextAuth({
  providers: [
    GoogleAuthProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      // authorization: { params: { prompt: 'consent' } }
    }),
    // ...add more providers here
  ],
  // jwt: {
  //   signingKey: process.env.SIGNING_KEY,
  // },
  callbacks: {
    async session({session}) {
      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index("subscription_by_user_ref"),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index("user_by_email"),
                      q.Casefold(session.user?.email as string)
                    )
                  )
                )
              ),
              q.Match(q.Index("subscription_by_status"), "active"),
            ])
          )
        );
        return {
          ...session,
          activeSubscription: userActiveSubscription,
        };
      } catch (error) {
        console.log(error);
        return {
          ...session,
          activeSubscription: null,
        };
      }
    },

    async signIn(user) {
      const { user: userInfo } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index("users_by_email"),
                  q.Casefold(userInfo.email as string)
                )
              )
            ),
            q.Create(q.Collection("users"), {
              data: { email: userInfo.email },
            }),
            q.Get(
              q.Match(
                q.Index("users_by_email"),
                q.Casefold(userInfo.email as string)
              )
            )
          )
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
