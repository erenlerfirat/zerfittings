import img from '../../../../assets/photo/filtre/paslanmaz-cemberli-torba-filtre-bezi.jpg'
import img2 from '../../../../assets/photo/filtre/sms-boru-tip-hat-filtresi-şema.jpg'
import img3 from '../../../../assets/photo/filtre/paslanmaz-y-tipi-hat-filtresi.jpg'
import img4 from '../../../../assets/photo/filtre/sms-boru-tip-hat-filtresi.jpg'
import img5 from '../../../../assets/photo/filtre/paslanmaz-filtre-kombinasyonu.jpg'
import img6 from '../../../../assets/photo/filtre/torba-filtre.jpg'

import Product from '../Product.js';
import MainNavigation from '../../../layout/MainNavigation.js'
import Footer from '../../../layout/Footer.js'

function StainlessFilter() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <div className="min-w-full mx-auto ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Paslanmaz Filtre</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                <Product
                    img={img4}
                    detailImg={img2}
                    headerFirstLine={"DIN/SMS BORU TİP HAT FİLTRESİ"}
                    >
                </Product>

                <Product
                    img={img3}
                    headerFirstLine={"Y TİPİ HAT FİLTRESİ"}
                    >
                </Product>

                <Product
                    img={img5}
                    headerFirstLine={"PASLANMAZ FİLTRE KOMBİNASYONU"}
                    >
                </Product>

                <Product
                    img={img6}
                    headerFirstLine={"TORBA FİLTRE SET"}
                    >
                </Product>

                <Product
                    img={img}
                    headerFirstLine={"TORBA FİLTRE BEZİ"}
                    >
                </Product>
            </ul>
        </div>
            <Footer />
        </div>
        
    )
}

export default StainlessFilter