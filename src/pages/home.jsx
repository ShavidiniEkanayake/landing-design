import {NavBar} from '@/components/layout/navbar'
import {Hero} from '@/components/hero'
import {Payment} from '@/components/payment'
import {Benefits} from '@/components/benefits'
import {Scan} from '@/components/scan'
import {Services} from '@/components/services'

function Home(){
    return( 
    <div>
        <NavBar/>
        <Hero/>
        <Services/>
        <Payment/>
        <Benefits/>
        <Scan/>
    </div>
    )
}

export default Home;