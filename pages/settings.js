import CustomCursor from '../components/CustomCursor';
import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';
import Meta from '../components/Meta'


const SettingsPage = () => {
   return (
      <>

         <Meta title='Settings' />
         <CustomCursor />
         <h2>Manage Themes</h2>
         <div className={styles.container}>
            <ThemeInfo
               name="GitHub Dark"
               icon="/images/github-dark.png"
               publisher="GitHub"
               theme="github-dark"
               description="GitHub theme for VS Code"
            />
            <ThemeInfo
               name="Dracula"
               icon="/images/dracula.png"
               publisher="Dracula Theme"
               theme="dracula"
               description="Official Dracula Theme. A dark theme for many editors, shells, and more."
            />
            <ThemeInfo
               name="Ayu Dark"
               icon="/images/ayu.png"
               publisher="teabyii"
               theme="ayu-dark"
               description="A simple theme with bright colors."
            />
            <ThemeInfo
               name="Ayu Mirage"
               icon="/images/ayu.png"
               publisher="teabyii"
               theme="ayu-mirage"
               description="A simple theme with bright colors."
            />
            <ThemeInfo
               name="Nord"
               icon="/images/nord.png"
               publisher="arcticicestudio"
               theme="nord"
               description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
            />
            <ThemeInfo
               name="Night Owl"
               icon="/images/night-owl.png"
               publisher="sarah.drasner"
               theme="night-owl"
               description="A VS Code theme for the night owls out there."
            />
         </div>
      </>
   );
};

export default SettingsPage