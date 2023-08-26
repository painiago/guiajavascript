
import styles from './styles.module.scss'


import { signIn, signOut, useSession } from 'next-auth/react';

import {FiX} from 'react-icons/fi';
import {FaGoogle} from 'react-icons/fa';

export function SignInButton (){
  const {data: session} = useSession()

  console.log(session);

  
  return session ? (
    
    <button type="button"
     className={styles.signInButton}
     onClick={() => signOut()}
     >
    <FaGoogle color='#08cf05'/>
    {session?.user?.name}
    <FiX color='#6f6767' className={styles.closeIcon}/>
    </button>
   ) : ( 
   
   <button 
    type="button"
    className={styles.signInButton}
    onClick={() => signIn('google')}>

   <FaGoogle color='#ebf614'/>
   Entrar com Google 
   </button>
  );
} 