import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import "../styles/globals.css";
import "../styles/themes.css";
import { gsap } from 'gsap'
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
    </Layout>
  );
}

export default MyApp;