import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/themes.css";
import { gsap } from 'gsap';
import dynamic from "next/dynamic";
import { Analytics } from '@vercel/analytics/react';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools'

const Layout = dynamic(() => import('../components/Layout'))
const Meta = dynamic(() => import('../components/Meta'))

// if (process.env.REACT_APP_NODE_ENV === 'production') {
//   disableReactDevTools();
// }


function MyApp({ Component, pageProps }) {

  useEffect(() => {
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
      <Analytics />
    </Layout>
  );
}

export default MyApp;