import img from '../../../../assets/photo/dirsek/din-klempli-dirsek.png'
import img2 from '../../../../assets/photo/dirsek/din-dirsek45.png'
import img3 from '../../../../assets/photo/dirsek/din-dirsek90.png'
import img4 from '../../../../assets/photo/dirsek/SEMINOKS-DIRSEKLER-DIN.jpg'
import img5 from '../../../../assets/photo/dirsek/SEMINOKS-KLEMPLI-DIRSEK.jpg'

import Product from '../Product.js';
import MainNavigation from '../../../layout/MainNavigation.js'
import Footer from '../../../layout/Footer.js'

function StainlessJoint() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <div className="min-w-full mx-auto ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Paslanmaz Dirsek</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                <Product
                    img={img}
                    detailImg={img5}
                    headerFirstLine={"DIN/ISO 2037 90° KLEMPLİ DİRSEK"}
                    >
                </Product>

                <Product
                    img={img3}
                    detailImg={img4}
                    headerFirstLine={"DIN/ISO 2037 90° DİRSEK"}
                    >
                </Product>

                <Product
                    img={img2}
                    headerFirstLine={"DIN 45° DİRSEK"}
                    >
                </Product>
                
            </ul>
        </div>
            <Footer />
        </div>
        
    )
}

export default StainlessJoint