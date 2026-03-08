import { Carousel } from "flowbite-react";
import img1 from "../../../assets/sustainable-development.png"
import img2 from "../../../assets/greatplace.jpg"
import img3 from "../../../assets/globalreach.jpg"

function Slider() {
  return (
    <div className="bg-white h-screen flex border-y border-gray-200">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-10/12 max-w-4xl mx-auto my-24 self-center">
        <Carousel slideInterval={8000}>

          {/* Slide 1 */}
          <div className="relative h-full w-full group">
                  <img
                    className="h-full w-full object-contain"
                    src={img1}
                    alt=""
                  />
                
                  {/* Hover Overlay */}
                  <div className="
                      absolute inset-0
                      bg-black/80
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-center justify-center
                    "
                  >
                    <div className="text-white text-center px-6">
                      <h2 className="text-xl font-bold mb-2">Sürdürülebilir Geliştirme</h2>
                      <p className="text-sm ">
                        Zer Fittings, sorumlu operasyonları ve çevre odaklı çözümleri teşvik eder.<br></br>
                        Güvenli ve verimli denizcilik hizmetlerini desteklerken çevrenin korunması için çalışıyoruz.
                      </p>
                    </div>
                  </div>
          </div>


          {/* Slide 2*/}
          <div className="relative h-full w-full group">
                  <img
                    className="h-full w-full object-cover"
                    src={img2}
                    alt=""
                  />
                
                  {/* Hover Overlay */}
                  <div className="
                      absolute inset-0
                      bg-black/80
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-center justify-center
                    "
                  >
                    <div className="text-white text-center px-6">
                      <h2 className="text-xl font-bold mb-2">Great Place to Work</h2>
                      <p className="text-sm">
                        İnsanları güçlendirir, gelişimi teşvik eder ve ekip çalışması ile güven kültürü oluştururuz.<br></br>
                        Zer Fittings, herkesin başarıya ulaşabileceği bir çalışma ortamıdır.
                      </p>
                    </div>
                  </div>
          </div>
          
          {/* Slide 3 */}
          <div className="relative h-full w-full group">
                  <img
                    className="h-full w-full object-cover"
                    src={img3}
                    alt=""
                  />
                
                  {/* Hover Overlay */}
                  <div className="
                      absolute inset-0
                      bg-black/80
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-center justify-center
                    "
                  >
                    <div className="text-white text-center px-6">
                      <h2 className="text-xl font-bold mb-2">Global Araştırma & Güvenlik</h2>
                      <p className="text-sm">
                        Dünya çapında varlık, kesintisiz hizmet.<br></br>
                        Her adımda önce güvenlik.<br></br>
                        Her süreçte mükemmeliyet anlayışımız, güvenilir ve risksiz hizmet sunumunu garanti eder.
                      </p>
                    </div>
                  </div>
          </div>

        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
