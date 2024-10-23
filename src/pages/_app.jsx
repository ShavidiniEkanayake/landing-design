import { Montserrat } from 'next/font/google';

import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
