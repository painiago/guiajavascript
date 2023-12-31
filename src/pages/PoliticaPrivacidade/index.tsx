import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLink, faGlobe, faUserTie, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


export function PoliticaPrivacidade() {
  return (
    <div className={styles.privacidadeContainer}>
      <h1>POLÍTICA DE PRIVACIDADE E DE PROTEÇÃO DE DADOS PESSOAIS</h1>
      <div className={styles.privacidadePost}>
        <div className={styles.gridItem}>
          <p >
            Nesta Política de Privacidade, explicaremos aos visitantes e
            aos proprietários das imagens contidas neste site.
          </p>
          <p>Para exercer os seus direitos, basta entrar em contato por e-mail.</p>
          <br></br>
          <p>Esclareceremos como o site se comporta.</p>
        </div>
        <div className={styles.gridItem}>
          <h5>
          <FontAwesomeIcon icon={faUserTie} /> Dados de visitantes </h5>
            <p> &bull; Não coletamos nenhum dado pessoal de usuários que acessam
              o site. Mas não descartamos a possibilidade de que isso aconteça
              futuramente para fins de marketing. Sempre se mantenha atento a 
              política de privacidade. </p>
        </div>
        <div className={styles.gridItem}>
          <h5><FontAwesomeIcon icon={faCircleInfo} /> Sobre o site</h5>
          <p>&bull; O site pode apresentar, textos, imagens, vídeos,
            e outras informações, que visa compartilhar um pouco sobre o mundo
            do javascript e da programação.</p>
        </div>
        <div className={styles.gridItem}>
          <h5><FontAwesomeIcon icon={faLink} /> Links externos</h5>
          <p>&bull; Para melhorar a experiência e compreensão das informações, você
            encontrara links para outros websites com intuito de complementar
            as informações. </p>
             <h5>
            <FontAwesomeIcon icon={faGlobe} /> Navegação geral no site
             </h5>
            <p>&bull; Coletamos os dados sobre o navegador 
              visando melhorar o desempenho do site.</p>
        </div>
        <div className={styles.gridItem}>
          <h5><FontAwesomeIcon icon={faAddressCard} /> Cookies</h5>
          <p>&bull;	O site utiliza cookies para armazenar preferências de navegação.
            Essa tecnologia é comum em sites, que consiste em um pequeno arquivo de
            texto, colocado em seu dispositivo ou navegador, que permite a
            identificação do dispositivo. </p>
          <p>&bull;	Utilizamos o cookie de desemprenho neste site. É coletado
            informações de como você utiliza o site, ajuda a melhorar a navegação
            e melhorar a experiência. </p>
          <p>&bull;	Seus dados não são usados, nem compartilhados com terceiros
            para fins lucrativos.</p>
          <p>&bull; Cookies podem ser desativados pelo usuário </p>
        </div>
        <div className={styles.gridItem}>
          <h5><FontAwesomeIcon icon={faAddressBook} /> Contato</h5>
          <p>suportwebjs@gmail.com </p>
        </div>
      </div>
    </div>
  )
}

export default PoliticaPrivacidade;