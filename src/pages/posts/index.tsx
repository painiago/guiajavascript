/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import styles from './styles.module.scss';
import {getPrismicClient} from '../../services/prismic';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { RichText } from 'prismic-dom';
import { SubscribeButton } from '@/components/SubcribeButton';

import { faHand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Projetos from '../Projetos';
// import { RichText } from 'prismic-dom';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  link:string;
}
interface PostsProps{
  posts: Post[];
}


 export default function Posts ({posts}: PostsProps){
  return (
  <>
    <Head>
      <title> Posts | JavaScript</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link legacyBehavior href={`/posts/${post.slug}`} key={post.slug}>
            <a>
             <time>{post.updatedAt}</time>
             <strong>{post.title}</strong>
             <p>{post.excerpt}</p>
             </a>           
           </Link>          
           ))}
        </div>
        <Projetos />
           <div className={styles.payment}>
            <div className={styles.iconPayment}>
              <span>
              Clique em <strong>Comprar Agora</strong> para garantir o seu acesso imediato ao Guia JavaScript e comece a sua jornada transformadora agora mesmo!
                 <FontAwesomeIcon icon={faHand} className={styles.icon}/>
                </span>  
              </div>
                <SubscribeButton />
           </div>
      </main>
  </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient ();

  const response = await prismic.getAllByType('publication')
 

const posts = response.map(post => {
  return{
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt: post.data.content.find((content: any) => content.type === 'paragraph')?. text ??'',
    updatedAt: new Date (post.last_publication_date).toLocaleDateString('pt-BR',{
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })    
  };
});


console.log(response)
  return {
    props:{
      posts
    },
    revalidate: 60 * 60,
  }
}