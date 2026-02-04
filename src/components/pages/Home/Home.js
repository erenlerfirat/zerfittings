import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import ContactForm from './ContactForm.js'
import FeatureSection from './FeatureSection.js'
import Slider from './Slider.js'

function Home() {
    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <FeatureSection />
            <Slider/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home