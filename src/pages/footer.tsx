import Link from 'next/link';
import styles from './footer.module.scss';
import ScrollToTopButton from '@/components/ScrollBtn';


export function Footer (){
  return(
    <footer className={styles.footerContainer}>
      <ScrollToTopButton />
      <div className={styles.footerContent}>
        <p>Copyright © 2023 Guia JS | Todos os direitos reservados.</p>
        {/* <Link href='/PoliticaPrivacidade'>Política de privacidade </Link> */}
      </div>
    </footer>
    
  )
} 
export default Footer;