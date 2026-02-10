import img from '../../../../assets/photo/tee/kısa-tee.png'
import img2 from '../../../../assets/photo/tee/uzun-klempli-tee.png'
import img3 from '../../../../assets/photo/tee/uzun-tee.png'
import img4 from '../../../../assets/photo/tee/SEMINOKS-DIN-KISA-ESIT-TEE.jpg'
import img5 from '../../../../assets/photo/tee/SEMINOKS-DIN-UZUN-ESIT-TEE.jpg'
import img6 from '../../../../assets/photo/tee/SEMINOKS-DIN-KLEMPLI-TEE.jpg'

import Product from '../Product.js';
import MainNavigation from '../../../layout/MainNavigation.js'
import Footer from '../../../layout/Footer.js'

function StainlessTee() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <div className="min-w-full mx-auto ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Paslanmaz Tee</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                <Product
                    img={img}
                    detailImg={img4}
                    headerFirstLine={"DIN/ISO 2037 KISA EŞİT TEE"}
                    >
                </Product>

                <Product
                    img={img2}
                    detailImg={img6}
                    headerFirstLine={"DIN/ISO 2037 UZUN EŞİT TEE"}
                    >
                </Product>

                <Product
                    img={img3}
                    detailImg={img5}
                    headerFirstLine={"DIN/ISO 2037 KLEMPLİ TEE"}
                    >
                </Product>
                
            </ul>
        </div>
            <Footer />
        </div>
        
    )
}

export default StainlessTee