import { Carousel } from "flowbite-react";
import img1 from "../../../assets/sustainable-development.png"
import img2 from "../../../assets/greatplace.jpg"
import img3 from "../../../assets/globalreach.jpg"

function Slider() {
  return (
    <div className="bg-white h-screen flex border-y border-gray-200">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-10/12 max-w-4xl mx-auto my-24 self-center">
        <Carousel slideInterval={4000}>

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
                      <h2 className="text-xl font-bold mb-2">Sustainable Growth</h2>
                      <p className="text-sm ">
                        Portline Global promotes responsible operations and eco-focused solutions.<br></br>
                        We work to protect the environment while supporting safe, efficient maritime services.
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
                        We empower people, encourage growth, and build a culture of teamwork and trust.<br></br>
                        Portline Global is a workplace where everyone can succeed.
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
                      <h2 className="text-xl font-bold mb-2">Global Reach & Safety</h2>
                      <p className="text-sm">
                        Worldwide presence, seamless service.<br></br>
                        Safety first, every step.<br></br>
                        Excellence in every process ensures dependable and risk-free service delivery.
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
