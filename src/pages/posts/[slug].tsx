import { getPrismicClient } from "@/services/prismic";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react"
import Head from "next/head";
import { RichText } from "prismic-dom";
import styles from "./post.module.scss";


interface PostProps{
  post: {
    slug:string;
    title:string;
    content: string;
    updatedAt: string;
    link:string;
  };
}

export default function Post ({post}: PostProps) {
  return(
   <>
    <Head>
      <title>
        {post.title} | ig.news
      </title>
    </Head>
    <main className={styles.container}>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <time>{post.updatedAt}</time>
        <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{__html: post.content}} />
      </article>
    </main>
   </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) =>{
  // const session = await getSession ({req});
  const prismic = getPrismicClient();
  const response = await prismic.getByUID("publication", String(params?.slug));

  
  // if (!session?.activeSubscription){
  //   return{
  //     redirect:{
  //       destination: `/posts/preview/${params?.slug}`,
  //       permanent:false,
  //     }
  //   }
  // }

  const post = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date (response.last_publication_date).toLocaleDateString('pt-BR',{
      day: '2-digit',
      month: 'long',
      year: 'numeric'

    })
  };
  return {
    props:{
      post,
    }
  }
}
