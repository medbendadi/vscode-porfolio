import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/themes.css";
import { gsap } from 'gsap';
import dynamic from "next/dynamic";

const Layout = dynamic(() => import('../components/Layout'))
const Meta = dynamic(() => import('../components/Meta'))

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // if (process.env.NODE_ENV === 'production') {
    //   disableReactDevTools();
    // }
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