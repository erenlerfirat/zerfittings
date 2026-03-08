import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import ContactForm from './ContactForm.js'
import FeatureSection from './FeatureSection.js'
import Slider from './Slider.js'
import ProductsCard from './ProductsCard.js'
import Process from './Process.js'
import StainlessHygieneCard from './StainlessHygieneCard.js'

function Home() {
    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <StainlessHygieneCard/>
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