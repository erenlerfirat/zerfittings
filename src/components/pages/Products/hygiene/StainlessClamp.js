import img from '../../../../assets/photo/boru-aski-kelepce/boru-saplı-kelecpçe-şema.jpg'
import img2 from '../../../../assets/photo/boru-aski-kelepce/boru-saplı-kelepçe.png'
import img3 from '../../../../assets/photo/boru-aski-kelepce/çubuk-saplı-kelepçe.png'
import Footer from '../../../layout/Footer.js';
import MainNavigation from '../../../layout/MainNavigation.js';
import Product from '../Product.js';

function StainlessClamp() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <div className="min-w-full mx-auto ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Paslanmaz Boru Askı Kelepçeler</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                <Product
                    img={img2}
                    detailImg={img}
                    headerFirstLine={"Çubuk Saplı Kelepçe"}
                    >
                </Product>

                <Product
                    img={img3}
                    headerFirstLine={"Boru Saplı Kelepçe"}
                    >
                </Product>
                
            </ul>
        </div>
            <Footer />
        </div>
        
    )
}

export default StainlessClamp