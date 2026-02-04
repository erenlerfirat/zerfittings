import MainNavigation from '../../layout/MainNavigation'
import Footer from '../../layout/Footer'
import ContactForm from '../Home/ContactForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="bg-gray-100 h-screen w-screen overflow-x-hidden">
            <MainNavigation />
            <div className="w-full">
                 <iframe
                   className="w-full h-96"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.4527010838075!2d29.309765628299708!3d40.83347048905902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc317b8e1849%3A0x922b0b73a2ec059f!2sYayla%2C%20P%C4%B1nar%20Sk.%2C%2034944%20Tuzla%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1765282056086!5m2!1str!2str"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>

                
            </div>   
                    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

        {/* PHONE */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPhone} className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-gray-600 mt-1">(+90) 544 442 49 55</p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-gray-600 mt-1">sales@portlineglobal.co</p>
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faLocationDot} className="text-blue-600 w-14 h-14 mb-4" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-gray-600 mt-1">
            Pınar Sokak, Yayla <br />
            34944 Tuzla / İstanbul
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