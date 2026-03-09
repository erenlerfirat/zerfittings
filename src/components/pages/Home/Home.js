import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import ContactForm from './ContactForm.js'
import Slider from './Slider.js'
import Process from './Process.js'
import ProductsCard from './ProductMenu/ProductsCard.js'

function Home() {
    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <ProductsCard />
            {/* <FeatureSection /> */}
            <Process/>
            <Slider/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home