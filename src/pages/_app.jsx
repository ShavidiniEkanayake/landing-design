import { Montserrat } from 'next/font/google';

import '../styles/globals.css';
import Home from './home';

const montserrat = Montserrat({ subsets: ['latin'] });

function MyApp() {
  return (
    <main className={montserrat.className}>
      <Home />
    </main>
  );
}

export default MyApp;
