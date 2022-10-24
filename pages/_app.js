import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/themes.css";
import { gsap } from 'gsap';
import dynamic from "next/dynamic";
// import { disableReactDevTools } from '@fvilers/disable-react-devtools'

const Layout = dynamic(() => import('../components/Layout'))
const Meta = dynamic(() => import('../components/Meta'))

// if (process.env.REACT_APP_NODE_ENV === 'production') {
//   disableReactDevTools();
// }


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () { };
    }
    gsap.registerPlugin()
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Meta title={`MedBendadi | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;