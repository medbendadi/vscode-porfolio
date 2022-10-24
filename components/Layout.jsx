import styles from '../styles/Layout.module.css'
import Titlebar from './Titlebar'
import Sidebar from './Sidebar'
import Explorer from './Explorer'
import Tabsbar from './Tabsbar'
import Bottombar from './Bottombar'
import { useEffect } from 'react'
const Layout = ({ children }) => {
  useEffect(() => {
    if (window) {
      if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () { };
      }
    }
  }, [])

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