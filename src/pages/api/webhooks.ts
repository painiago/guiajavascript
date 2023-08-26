/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from "stream";
import Stripe from "stripe";
import { stripe } from "../../services/stripe";
import { saveSubscription } from "./_lib/manageSubcription";


async function buffer(readable: Readable) {
  const chunks = [];

  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === "string" ? Buffer.from(chunk) : chunk
    );
  }
  return Buffer.concat(chunks);
}
export const config = {
  api: {
    bodyParser: false
  }
}
// Sessão de eventos relante para o banco de dados

const relevantEvent = new Set([
  'checkout.session.completed',
  'customer.subscripton.created',
  'customer.subscripton.updated',
  'customer.subscripton.deleted'

])

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const secret = req.headers['stripe-signature']!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET as string)
    } catch (Error) {
      res.status(400).send(`Error Webhook:  ${Error}`)
      return
    }

    const { type } = event;

    if  (relevantEvent.has(type)) {
      try {
        switch (type) {
         
          case 'customer.subscription.updated':
          case 'customer.subscription.deleted':
          case 'customer.subscripton.created':

          const subscription = event.data.object as Stripe.Subscription;

          await saveSubscription(
            subscription.id,
            subscription.customer.toString(),
            

          );

            break;
          case 'checkout.session.completed':
            const checkoutSession = event.data.object as Stripe.Checkout.Session
            
            await saveSubscription(
              checkoutSession.subscription?.toString() as string,
              checkoutSession.customer?.toString() as string,
              true
            )

            break;
          default:
            throw new Error('Unknown event')
        }
      } catch (err) {
        return res.json({ error: "Webhook failed" })
      }
    }


    res.json({ received: true })
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end('Method not allowed');
  }
}