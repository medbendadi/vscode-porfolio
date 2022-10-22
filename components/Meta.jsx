import Head from 'next/head';

const CustomHead = ({ title }) => {
   return (
      <Head>
         <title>{`MedBendadi | ${title}`}</title>
         <link rel="shortcut icon" href="/images/vscode_icon.svg" />
         <meta
            name="description"
            content="Mohamed bendadi is a full stack greedy web developer building websites and applications that you would like to use."
         />
         <meta
            name="keywords"
            content="Mohamed Bendadi, nitin, ranganath, web developer portfolio, bendadi web developer, bendadi developer, mern stack, Mohamed Bendadi portfolio, vscode-portfolio"
         />
         <meta property="og:title" content="Mohamed Bendadi's Portfolio" />
         <meta
            property="og:description"
            content="A full-stack developer building websites that you'd like to use."
         />
         <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
         <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
         <meta name="twitter:card" content="summary_large_image" />
      </Head>
   );
};

export default CustomHead;

CustomHead.defaultProps = {
   title: 'bendadi Ranganath',
};