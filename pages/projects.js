import React from 'react'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/ProjectsPage.module.css'
import Meta from '../components/Meta'
import CustomCursor from '../components/CustomCursor'

const projects = ({ projects }) => {

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

export const getServerSideProps = async (context) => {
   const query = encodeURIComponent(`*[ _type == "projects" ]`);
   const url = `${process.env.SANITY_URL}query=${query}`;
   const data = await fetch(url).then((res) => res.json());
   const projects = data.result;
   if (!projects || !projects.length === 0) {
      return {
         props: {
            projects: [],
         },
      };
   } else {
      return {
         props: {
            projects,
         },
      };
   }
};