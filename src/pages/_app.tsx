import { Header } from '@/components/Header'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
// import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import  { Footer } from '@/pages/footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {

  return (
    
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
    
  )
}
