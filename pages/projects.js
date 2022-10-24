import React from 'react'
import styles from '../styles/ProjectsPage.module.css'

import dynamic from 'next/dynamic'

const ProjectCard = dynamic(() => import('../components/ProjectCard'))
const Meta = dynamic(() => import('../components/Meta'))
const CustomCursor = dynamic(() => import('../components/CustomCursor'))

const projects = ({ projects }) => {
   console.log(projects);

   return (
      <>
         <Meta title='Projects' />
         <CustomCursor />
         {
            !projects ? <h3>No projects Here Yet</h3> :
               (
                  <>
                     <h3>Stuff I've Built So Far</h3>
                     <div className={styles.container}>
                        {projects.map((project, index) => (
                           <ProjectCard key={index} project={project} />
                        ))}
                     </div>
                  </>
               )
         }
      </>
   )
}

export default projects

export const getStaticProps = async (context) => {
   const query = encodeURIComponent(`*[ _type == "projects" ]`);
   const url = `${process.env.SANITY_URL}query=${query}`;
   const data = await fetch(url).then((res) => res.json());
   const projects = data.result;
   if (!projects || !projects.length === 0) {
      return {
         props: {
            projects: [],
         }
      };
   } else {
      return {
         props: {
            projects
         },
      }
   }
};