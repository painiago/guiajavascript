import { api } from '@/services/api';
import { getStripeJs } from '@/services/stripe-js';
import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface SubcribeButtonProps{
  priceId: string;
}

export const SubscribeButton: React.FC<SubcribeButtonProps> = ({ priceId }) => {
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

const router = useRouter();

  useEffect(() => {
    const handleButtonClick = () => {
      // Verificar se gtag está definido antes de chamá-lo
      if (window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'button_comprar',
          event_label: 'comprar_button',
        });
      }
    };

    // Adicionar um ouvinte de clique ao botão
    const subscribeButton = document.getElementById('subscribe-button');
    if (subscribeButton) {
      subscribeButton.addEventListener('click', handleButtonClick);
    }

    return () => {
      // Remover o ouvinte apenas se gtag e subscribeButton estiverem definidos
      if (window.gtag && subscribeButton) {
        subscribeButton.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  return(
    <button  id="subscribe-button" type='button'
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
