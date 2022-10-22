import React from 'react'
import styles from '../styles/ContactCode.module.css';


const contactItems = [
   {
      social: 'website',
      link: 'bendadi.me',
      href: 'https://medbendadi.vercel.app/',
   },
   {
      social: 'email',
      link: 'itsbendadi@gmail.com',
      href: 'mailto:itsbendadi@gmail.com',
   },
   {
      social: 'github',
      link: 'medbendadi',
      href: 'https://github.com/medbendadi',
   },
   {
      social: 'linkedin',
      link: 'Mohamed Bendadi',
      href: 'https://www.linkedin.com/in/mohamed-bendadi/',
   },

];


const ContactCode = () => {
   return (
      <div className={styles.code}>
         <p className={styles.line}>
            <span className={styles.className}>
               .socials
            </span>
            &#123;
         </p>
         {
            contactItems.slice(0, 8).map((item, index) => (
               <p className={styles.line} key={index}>
                  &nbsp;&nbsp;&nbsp;{item.social}:{' '}
                  <a href={item.href} target='_blank' rel='noopener'>{item.link}
                  </a>
                  ;
               </p>
            ))
         }
         {
            contactItems.slice(8, contactItems.length).map((item, index) => (
               <p className={styles.line} key={item.index}>
                  &nbsp;&nbsp;{item.social}:{' '}
                  <a href={item.href} target='_blank' rel='noopener'>
                     {item.link}
                  </a>
                  ;
               </p>
            ))
         }
         <p className={styles.line}>&#125;</p>
      </div>
   )
}

export default ContactCode