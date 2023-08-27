/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { GetStaticProps } from 'next'

import Head from 'next/head'
import styles from './home.module.scss'
import { SubscribeButton } from '@/components/SubcribeButton'
import { stripe } from '@/services/stripe'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Newsletter from '@/components/newsletter'

interface HomeProps {
  product:{
    priceId: string;
    amount:number;
  }
}


// .\stripe listen --forward-to localhost:3000/api/webhooks
// Client-side
// Server-side
// Static Site Generation

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | Guia JS</title>
      </Head>
      <main>
        <section className={styles.contentContainer}>
          <section className={styles.hero}>
            <span><p>👏 Hey, Welcome</p></span>
            <h1>Guia <span>JavaScript</span> para iniciantes</h1>
            <p>
              Tenha acesso a toda publicação <br />
              <span>por R$14,90</span>
            </p>
            <SubscribeButton />
          </section>
          <div className={styles.hero2}> 
            <img src="/imagens/capa1.png" alt="avatar" className={styles.imgfluid}/>
          </div>
        </section>
        <section className={styles.ContentSobre}>
          <div className={styles.BoxSobre}>
            <p>Sobre o Ebook</p>
            <p>Bem-vindo ao nosso ebook "Guia <span>JavaScript</span> para iniciantes"! Este guia abrangente é perfeito 
          para quem deseja mergulhar no mundo da programação web e dominar os fundamentos 
          do JavaScript, a linguagem por trás da interatividade e dinamismo em muitos sites e 
          aplicativos.</p>
        <div>
          <div className={styles.BoxSobre2}>
          <p>O que você vai aprender?</p>
            <p>O ebook foi projetado para levar você passo a passo através dos conceitos essenciais do JavaScript. 
              Desde os conceitos básicos de sintaxe até tópicos mais avançados como  
               <span> funções</span>,<span> objetos</span>,<span> programação assíncrona</span> e <span> manipulação do DOM</span>, abordamos tudo 
            o que você precisa saber para começar a construir suas próprias aplicações web.</p>
          </div>
        </div>
          </div>
        </section>
        <section className={styles.ContainerBook}>  
          <div className={styles.boxBook}>
            <img src="/imagens/225.png" alt="" />
          </div>
          <div className={styles.boxBook}>
            <ul>
            <p>O que você vai ver:</p>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Principais conceitos</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Sintaxe Básica</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Estrutura de controle</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Funções</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Arrays</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Objetos</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>Eventos</p></li>
              <li><FontAwesomeIcon icon={faCircleCheck} /><p>POO</p></li>
            </ul> 
          </div>    
        </section>
        <section className={styles.ContentTrabalho}>  
          <div className={styles.BoxPay}>
            <p>Adiquira o ebook agora e comece sua jornada na programação web!</p>
            <div className={styles.BoxPay2}>
              <SubscribeButton/>
            </div>
          </div>
          <div className={styles.BoxTrabalho}>
            <p>Mercado de trabalho - <span>JavaScript</span></p>
            <p>Com papel importantíssimo no funcionamento da Internet como 
            conhecemos, o JavaScript continuará sendo uma das linguagens
            mais procuradas e populares do mercado, principalmente pela 
            leveza de processamento de aplicações desenvolvidas com ele.</p>
            <p> <span>Todo programador web deve aprender javascript independentemente da
            linguagem de programação utilizada em seu trabalho.</span></p>
          </div>
          <div className={styles.BoxNoticia}>
            <div className={styles.BoxCont}>
              <img src="/imagens/noticia1.png" alt="" />
            </div>
            <div className={styles.BoxCont}>
              <img src="/imagens/noticia2.png" alt="" />
            </div>
          </div>
          {/* <Newsletter/> */}
        </section>
        <section className={styles.ContainerDoacao}>
          <div>
            <div className={styles.BoxDoacao}>
              <div className={styles.Boxtxt}>
                <p><span>8%</span> de impacto</p>
                <p><span>100%</span> de compromisso</p>
              </div>
            </div>
            <div className={styles.BoxDoacao1}>
              <div className={styles.Boxtxt1}>
                  <p>Cada compra contribui para causas significativas, permitindo que você faça 
                  a diferença enquanto desfruta do seu produto."</p>
                </div>
            </div>
          </div>
          <div className={styles.ContentDoacao}>
            <div className={styles.BoxMac1}>
              <p>Casa Ronald McDonald - RJ</p>
                <p>Apoiam o tratamento de câncer infanto-juvenil 
                oferecendo gratuitamente alimentação, 
                hospedagem, transporte aos hospitais e apoio
                psicossocial.</p>
                <a href="https://casaronald.org.br/"  className={styles.LinkAnimado} target='_blank'>Conhecer Instituição</a>
            </div>
            <div className={styles.BoxMac2}>
               <img src="/imagens/doacao.png" alt="" />
            </div>
          </div>
        </section>
        <div className={styles.BoxLine}></div>
        <section className={styles.ContainerGarantia}>
          <div className={styles.BoxGarantia}>
          <div className={styles.BoxWD}>
            <p>Garantia incontestável de <span> 7 dias</span></p>
            <p>Milhares de pessoas comuns estão mudando a suas realidades com o poder do digital. Você também pode. Mas caso não goste do que encontrar, devolvo seu dinheiro de volta sem perguntas até 7 dias após a compra.</p>
            </div>
          </div>
          <div className={styles.BoxGarantia}>
            <div className={styles.BoxImgGarantia}>
            <img src="/imagens/ativo11.png" alt="" />
            </div>
          </div>
          </section>  
      </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
// const price = await stripe.prices.retrieve('price_1MmcZBGJM3WiKjW2hhK5Re07',{
// })
// const  product = {
//   priceId: price.id,
//   amount: new Intl.NumberFormat('pt-Br',{
//     style: 'currency',
//     currency: 'BRL',
//   }).format( price.unit_amount? price.unit_amount / 1001 : 0),

// };
//   return{
//   props: {
//     product,
//   },
//   revalidate: 60 * 60 * 24, //24 horas
// }
// }