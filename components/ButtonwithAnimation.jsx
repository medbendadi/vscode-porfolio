import React from 'react'
import styles from '../styles/ButtonAnimation.module.css'

import Link from 'next/link'
const ButtonWithAnimation = ({ url, text, collapsed }) => {
   return (
      <Link href={url}>
         <button className={collapsed ? `${styles.collapsed} ${styles.learn_more} cursor-button` : `${styles.learn_more} cursor-button`}>
            <span className={styles.circle} aria-hidden="true">
               <span
                  className={`${styles.icon} ${styles.arrow}`}
               ></span>
            </span>
            <span className={styles.button_text}>{text}</span>
         </button>
      </Link>

   )
}

export default ButtonWithAnimation