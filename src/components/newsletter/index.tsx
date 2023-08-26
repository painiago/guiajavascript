import styles from './styles.module.scss'

export default function Newsletter (){
  return (
    <div className={styles.ContainerNews}>
      <div className={styles.ContentNews}>
        <div className={styles.boxNew}>
          <p>Receba novidades em seu e-mail</p>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Nome" className={styles.input} />
          <input type="text" placeholder="E-mail" className={styles.input} />
          <button className={styles.submitButton}>Inscrever-se</button>
        </div>
      </div>
      <p>Não se preocupe, não compartilhamos seus dados e você cancela quando quiser.</p>
    </div>
  );
}