import { useState } from 'react'
import dynamic from 'next/dynamic';
import styles from '../styles/ContactPage.module.css'


const ContactCode = dynamic(() => import('../components/ContactCode'))
const Meta = dynamic(() => import('../components/Meta'))
const CustomCursor = dynamic(() => import('../components/CustomCursor'))

const ContactPage = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');
   const [errMessage, setErrMessage] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault();
      //if either part of the form isn't filled out
      //set an error message and exit
      if (!(name || email || subject || message)) {
         setErrMessage("Todo text and due date must be filled out.");
      } else {
         const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
               name: name,
               email: email,
               subject: subject,
               message: message
            }),
         });
         if (res.ok) {
            alert('Your response has been received!');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
         } else {
            alert('There was an error. Please try again in a while.');
            console.log(errMessage);
         }
      }
   };
   return (
      <div className={styles.container}>
         <Meta title='Contact' />
         <CustomCursor />
         <div>
            <h3 className={styles.heading}>Reach Out Via Social</h3>
            <ContactCode />
         </div>
         <div>
            <h3 className={styles.heading}>Or Fill This Out</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
               <div className={styles.flex}>
                  <div>
                     <label htmlFor='name'>Name</label>
                     <input
                        type='text'
                        name='name'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                     />
                  </div>
                  <div>
                     <label htmlFor='email'>Email</label>
                     <input
                        type='email'
                        name='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor='subject'>Subject</label>
                  <input
                     type='text'
                     name='subject'
                     id='subject'
                     value={subject}
                     onChange={(e) => setSubject(e.target.value)}
                     required
                  />
               </div>
               <div>
                  <label htmlFor='message'>Message</label>
                  <textarea
                     name='message'
                     id='message'
                     value={message}
                     rows='5'
                     onChange={(e) => setMessage(e.target.value)}
                     required

                  ></textarea>
               </div>
               <button className='cursor-button' type='submit'>Submit</button>
            </form>
         </div>
      </div>
   )
}

export async function getStaticProps() {
   return {
      props: { title: 'Contact' },
   };
}

export default ContactPage