import ButtonWithAnimation from '../components/ButtonwithAnimation';
import styles from '../styles/HomePage.module.css';
import Meta from '../components/Meta'
import CustomCursor from '../components/CustomCursor'

export default function HomePage() {
  return (
    <>
      <Meta title='Home' />
      <CustomCursor />
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mohamed Bendadi</h1>
            <h4 className={styles.bio}>
              <div>
                <ul className={styles.flip2}>
                  <li>Full Stack</li>
                  <li>MERN Stack</li>
                </ul>
              </div>
              <span> Web Developer</span>
            </h4>
            <ButtonWithAnimation
              url='/projects'
              text='View Work'
              collapsed={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

