import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import ContactForm from '../Home/ContactForm.js'
import Brochure from './Brochure.js'

function Product() {
    return (
        <div className="bg-gray-100 h-screen w-screen overflow-x-hidden">
            <MainNavigation />
            <Brochure/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Product