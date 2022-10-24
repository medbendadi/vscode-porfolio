
import Image from 'next/future/image';
import styles from '../styles/Titlebar.module.css'
const Titlebar = () => {
   return (
      <section className={styles.titlebar}>
         <Image
            src="/images/vscode_icon.svg"
            alt='vscode icon'
            width='15px'
            height='15px'
            className={styles.icon}
         />
         <div className={styles.items}>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
            <p>Help</p>
         </div>
         <div className={styles.title}>MedBendadi - Visual Studio Code</div>
         <div className={styles.windowButtons}>
            <span className={styles.minimize}></span>
            <span className={styles.maximize}></span>
            <span className={styles.close}></span>
         </div>
      </section>
   )
}

export default Titlebar