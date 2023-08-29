import Stripe from 'stripe';
import packageJson from '../../package.json';

const { version } = packageJson;

export const stripe = new Stripe(
  process.env.STRIPE_API_KEY as string,
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Ignews',
      version,
    },
  }
);

 stripe.checkout.sessions.create
