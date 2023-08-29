/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'; // Importe o useState
import { FiMenu, FiX } from 'react-icons/fi'; // Importe o ícone de menu
// import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Adicione o estado para controlar a abertura do menu

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {/* Ícone de menu */}
        {isMenuOpen ?  <FiX size={24} /> : <FiMenu size={24}/> } 
        </div>
        <nav className={isMenuOpen ? styles.open : ''}>
          <ActiveLink legacyBehavior href={'/'} activeClassName={styles.active}>
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink legacyBehavior href={'/posts'} activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        {/* <SignInButton /> */}
      </div>
    </header>
  );
}
