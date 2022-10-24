import { Html, Head, Main, NextScript } from 'next/document'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

export default function Document() {
   if (process.env.NODE_ENV === 'production') {
      disableReactDevTools();
   }
   return (
      <Html lang='en'>
         <Head />
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}