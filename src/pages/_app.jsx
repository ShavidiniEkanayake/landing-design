import { Montserrat } from 'next/font/google';

import '@/styles/globals.css';
import Home from './home';

const montserrat = Montserrat({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
