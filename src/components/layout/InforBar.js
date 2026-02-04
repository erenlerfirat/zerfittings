import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function InfoBar() {
    return (
        <div className="">
            
            {/* Top Orange Bar — Desktop Only */}
             <div className="hidden md:flex w-full bg-[#f37000] h-14 text-white items-center justify-between px-6 py-2 font-bold text-md">
               {/* Left Side */}
               <div className="flex items-center gap-6 mx-20">
                 <span className="flex items-center gap-1">
                     <a href="#"><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /> (+90) 544 442 49 55</a>
                   
                 </span>
                 <span className="flex items-center gap-1">
                   <a href="#">✉️ sales@portlineglobal.co</a>
                 </span>
                 <span className="flex items-center gap-1 italic">
                        <a href="#">PortlineGlobal.co</a>
                 </span>
               </div>
             
               {/* Right Side */}
               <div className="flex items-center gap-4 text-lg mx-20">
                        <a href="#"> <FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"> <FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="#"> <FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a>
               </div>
             </div>

        </div>
    )
}