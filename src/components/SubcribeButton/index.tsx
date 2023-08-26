import { api } from '@/services/api';
import { getStripeJs } from '@/services/stripe-js';
import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

interface SubcribeButtonProps{
  priceId: string;
}

export function SubscribeButton() {

//   const {data: session} = useSession();
//   const router = useRouter();
    
//   async function handleSubscribe() {
//     if(!session){
//       signIn('provider')
//       return;

//     }
 
      
//     try {
//       const response = await api.post('/subscribe'); 
//       const {sessionId} = response.data;

//       const stripe = await getStripeJs();

//       await stripe?.redirectToCheckout({sessionId})
//     }catch(error) {
//        console.log('Deu bom não',error);
      
//   }
// }

  
//  Sessão de checkout 

  return(
    <button type='button'
    className={styles.subscribeButton}
    // onClick={handleSubscribe}
    onClick={() => {
      window.open('https://pay.hotmart.com/V86068559F', '_blank');
    }}
    >
      <span></span>
      Compre agora
    </button>
  )
 
}
