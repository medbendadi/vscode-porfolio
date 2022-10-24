import React from 'react'
import dynamic from 'next/dynamic'


const Meta = dynamic(() => import('../components/Meta'))
const CustomCursor = dynamic(() => import('../components/CustomCursor'))
const ButtonWithAnimation = dynamic(() => import('../components/ButtonwithAnimation'))

const about = () => {
   return (
      <>
         <Meta title='About' />
         <CustomCursor />
         <h1>Are You Looking For ? </h1>
         <ul style={{ marginTop: '2rem' }}>
            <li style={{ marginTop: '1rem' }}>
               <h3 style={{ display: 'inline-block' }}>A completely motivated person</h3>
            </li>
            <li style={{ marginTop: '1rem' }}>
               <h3 style={{ display: 'inline-block' }}>A man with solid communication skills</h3>
            </li>
            <li style={{ marginTop: '1rem' }}>
               <h3 style={{ display: 'inline-block' }}>Someone who pays attention to every detail</h3>
            </li>
            <li style={{ marginTop: '1rem' }}>
               <h3 style={{ display: 'inline-block' }}>A mindset that is keen to learn and work in web
                  development</h3></li>
            <li style={{ marginTop: '1rem' }}>
               <h3 style={{ display: 'inline-block' }}>A person who can work as a team with the ability to discuss problems or ideas and
                  carry out tasks</h3></li>
            <li style={{ marginTop: '1rem' }}>
               <h3 style={{ display: 'inline-block' }}>That act independently and think creatively</h3>
            </li>
         </ul>
         <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ButtonWithAnimation
               url='/contact'
               text='Contact Me'
               collapsed={true}
            />
         </div>

      </>
   )
}

export async function getStaticProps() {
   return {
      props: { title: 'About' },
   };
}

export default about