import { Benefits } from '@/components/benefits';
import { Hero } from '@/components/hero';
import { NavBar } from '@/components/layout/navbar';
import { Payment } from '@/components/payment';
import { Scan } from '@/components/scan';
import { Services } from '@/components/services';
import { TakePayment } from '@/components/take-payment';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <TakePayment />
      <Services />
      <Payment />
      <Benefits />
      <Scan />
    </div>
  );
}

export default Home;
