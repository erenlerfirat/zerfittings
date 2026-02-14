import img from '../../../../assets/photo/disli-fittings/tek-tarafli-nipel.jpg'
import img2 from '../../../../assets/photo/disli-fittings/tek-tarafli-nipel-sema.jpg'
import img3 from '../../../../assets/photo/disli-fittings/cift-tarafli-nipel.jpg'
import img4 from '../../../../assets/photo/disli-fittings/cift-tarafli-nipel-sema.jpg'
import img5 from '../../../../assets/photo/disli-fittings/altikose-cift-tarafli-nipel.jpg'
import img6 from '../../../../assets/photo/disli-fittings/altikose-cift-tarafli-nipel-sema.jpg'
import img7 from '../../../../assets/photo/disli-fittings/tam-manson.jpg'
import img8 from '../../../../assets/photo/disli-fittings/tam-manson-sema.jpg'
import img9 from '../../../../assets/photo/disli-fittings/altikose-hortum-uclu-nipel.jpg'
import img10 from '../../../../assets/photo/disli-fittings/altikose-hortum-uclu-nipel-sema.jpg'
import img11 from '../../../../assets/photo/disli-fittings/dik-yayli-cekvalf.jpg'
import img12 from '../../../../assets/photo/disli-fittings/disli-konik-rakor.jpg'
import img13 from '../../../../assets/photo/disli-fittings/disli-konik-rakor-sema.jpg'
import img14 from '../../../../assets/photo/disli-fittings/altikose-bushing-reduksiyon.jpg'
import img15 from '../../../../assets/photo/disli-fittings/altikose-bushing-reduksiyon-sema.jpg'
import img16 from '../../../../assets/photo/disli-fittings/90-disli-dirsek.jpg'
import img17 from '../../../../assets/photo/disli-fittings/disli-kuyruklu-dirsek.jpg'
import img18 from '../../../../assets/photo/disli-fittings/disli-kuyruklu-dirsek-sema.jpg'
import img19 from '../../../../assets/photo/disli-fittings/disli-esit-tee.jpg'
import img20 from '../../../../assets/photo/disli-fittings/disli-esit-tee-sema.jpg'
import img21 from '../../../../assets/photo/disli-fittings/disli-esit-kruva-tee.jpg'
import img22 from '../../../../assets/photo/disli-fittings/disli-esit-kruva-tee-sema.jpg'
import img23 from '../../../../assets/photo/disli-fittings/altikose-kor-tapa.jpg'
import img24 from '../../../../assets/photo/disli-fittings/altikose-kor-tapa-sema.jpg'
import img25 from '../../../../assets/photo/disli-fittings/altikose-disli-kep.jpg'
import img26 from '../../../../assets/photo/disli-fittings/altikose-disli-kep-sema.jpg'


import Footer from '../../../layout/Footer.js';
import MainNavigation from '../../../layout/MainNavigation.js';
import Product from '../Product.js';

function ThreadedFittings() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <div className="min-w-full mx-auto ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Dişli Fittings Malzemeler</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                <Product
                    img={img}
                    detailImg={img2}
                    headerFirstLine={"TEK TARAFLI NİPEL 150 LBS"}
                    >
                </Product>

                <Product
                    img={img3}
                    detailImg={img4}
                    headerFirstLine={"ÇİFT TARAFLI NİPEL 150 LBS"}
                    >
                </Product>

                <Product
                    img={img5}
                    detailImg={img6}
                    headerFirstLine={"ALTIKÖŞE ÇİFT TARAFLI NİPEL 150 LBS"}
                    >
                </Product>

                <Product
                    img={img7}
                    detailImg={img8}
                    headerFirstLine={"TAM MANŞON 150 LBS"}
                    >
                </Product>
                <Product
                    img={img9}
                    detailImg={img10}
                    headerFirstLine={"ALTIKÖŞE HORTUM UÇLU NİPEL 150 LBS"}
                    >
                </Product>

                <Product
                    img={img11}
                    headerFirstLine={"DİK YAYLI ÇEKVALF"}
                    >
                </Product>

                <Product
                    img={img12}
                    detailImg={img13}
                    headerFirstLine={"DİŞLİ KONİK RAKOR 150 LBS"}
                    >
                </Product>

                <Product
                    img={img14}
                    detailImg={img15}
                    headerFirstLine={"ALTIKÖŞE BUSHING REDÜKSİYON 150 LBS"}
                    >
                </Product>
                <Product
                    img={img16}
                    headerFirstLine={"90° DİŞLİ DİRSEK 150 LBS"}
                    >
                </Product>

                <Product
                    img={img17}
                    detailImg={img18}
                    headerFirstLine={"DİŞLİ KUYRUKLU DİRSEK 150 LBS"}
                    >
                </Product>

                <Product
                    img={img19}
                    detailImg={img20}
                    headerFirstLine={"DİŞLİ EŞİT TEE 150 LBS"}
                    >
                </Product>

                <Product
                    img={img21}
                    detailImg={img22}
                    headerFirstLine={"DİŞLİ EŞİT KRUVA TEE 150 LBS"}
                    >
                </Product>
                
                <Product
                    img={img23}
                    detailImg={img24}
                    headerFirstLine={"ALTIKÖŞE KÖR TAPA 150 LBS"}
                    >
                </Product>

                <Product
                    img={img25}
                    detailImg={img26}
                    headerFirstLine={"ALTIKÖŞE DİŞLİ KEP 150 LBS"}
                    >
                </Product>
                
            </ul>
        </div>
            <Footer />
        </div>
        
    )
}

export default ThreadedFittings