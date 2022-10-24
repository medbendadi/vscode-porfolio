import styles from '../styles/Layout.module.css'
import Titlebar from './Titlebar'
import Sidebar from './Sidebar'
import Explorer from './Explorer'
import Tabsbar from './Tabsbar'
import Bottombar from './Bottombar'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}
const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={styles.content}>{children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout