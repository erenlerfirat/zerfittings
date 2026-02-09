import MainNavigation from '../../layout/MainNavigation'
import Footer from '../../layout/Footer'
import ContactForm from '../Home/ContactForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="bg-gray-100 h-screen w-screen overflow-x-hidden">
            <MainNavigation />
             
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

        {/* PHONE */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPhone} className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Telefon</h3>
          <p className="text-gray-600 mt-1">(+90) 545 334 3535</p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600 mt-1">info@zerfittings.com</p>
        </div>

        {/* ADDRESS */}
              <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Adres</h3>
          <p className="text-gray-600 mt-1">
            Aydıntepe Mahallesi Sahil Bulvarı <br /> NO: 126 / 54 İç kapı no : 51 <br />
            34940 Tuzla / İstanbul
          </p>
        </div>

              </div>
          </div>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact