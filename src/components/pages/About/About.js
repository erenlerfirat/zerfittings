import MainNavigation from '../../layout/MainNavigation'
import Footer from '../../layout/Footer'
import ContactForm from '../Home/ContactForm'
import AboutContent from './AboutContent'

function About() {
    return (
        <div className="bg-gray-100 h-screen w-screen overflow-x-hidden">
            <MainNavigation />
            <AboutContent />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default About