import Link from 'next/link';
import styles from './footer.module.scss';
import ScrollToTopButton from '@/components/ScrollBtn';


export function Footer (){
  return(
    <footer className={styles.footerContainer}>
      <ScrollToTopButton />
      <div className={styles.footerContent}>
        {/* <Link href='/PoliticaPrivacidade'>Política de privacidade </Link> */}
      </div>
    </footer>
    
  )
} 
export default Footer;