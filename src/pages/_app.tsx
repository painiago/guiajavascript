import { Header } from '@/components/Header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
// import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import  { Footer } from '@/pages/footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    // Adicione a declaração para dataLayer aqui
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
          page_path: url,
        });
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
    
  )
}
