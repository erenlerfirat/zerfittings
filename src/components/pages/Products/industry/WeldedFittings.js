import img from '../../../../assets/photo/kaynakli-fittings/kaynak-uclu-iso.jpg'
import img2 from '../../../../assets/photo/kaynakli-fittings/kaynak-uclu-iso-sema.jpg'
import img3 from '../../../../assets/photo/kaynakli-fittings/kaynak-uclu-konik-rakor.jpg'
import img4 from '../../../../assets/photo/kaynakli-fittings/kaynak-uclu-konik-rakor-sema.jpg'
import img5 from '../../../../assets/photo/kaynakli-fittings/iso-normunda-dikisli-dirsek.jpg'
import img6 from '../../../../assets/photo/kaynakli-fittings/iso-normunda-dikisli-dirsek-sema.jpg'
import img7 from '../../../../assets/photo/kaynakli-fittings/esit-tee.jpg'
import img8 from '../../../../assets/photo/kaynakli-fittings/esit-tee-sema.jpg'
import img9 from '../../../../assets/photo/kaynakli-fittings/reduksiyon-inegal-tee.jpg'
import img10 from '../../../../assets/photo/kaynakli-fittings/paslanmaz-kep.jpg'
import img11 from '../../../../assets/photo/kaynakli-fittings/paslanmaz-kep-sema.jpg'
import img12 from '../../../../assets/photo/kaynakli-fittings/konsantrik-reduksiyon.jpg'
import img13 from '../../../../assets/photo/kaynakli-fittings/konsantrik-reduksiyon-sema.jpg'
import img14 from '../../../../assets/photo/kaynakli-fittings/eksantrik-reduksiyon.jpg'
import img15 from '../../../../assets/photo/kaynakli-fittings/eksantrik-reduksiyon-sema.jpg'
import img16 from '../../../../assets/photo/kaynakli-fittings/cubuk-sapli-kelepce.jpg'
import img17 from '../../../../assets/photo/kaynakli-fittings/pn5-pn10-duz-flans.jpg'
import img18 from '../../../../assets/photo/kaynakli-fittings/pn5-pn10-duz-flans-sema.jpg'
import img19 from '../../../../assets/photo/kaynakli-fittings/pn6-10-16-40-kor-flans.jpg'
import img20 from '../../../../assets/photo/kaynakli-fittings/pn6-10-16-40-kor-flans-sema.jpg'
import img21 from '../../../../assets/photo/kaynakli-fittings/pn10-16-40-kaynak-boyunlu-flans.jpg'
import img22 from '../../../../assets/photo/kaynakli-fittings/pn10-16-40-kaynak-boyunlu-flans-sema.jpg'
import img23 from '../../../../assets/photo/kaynakli-fittings/baskili-flans.jpg'
import img24 from '../../../../assets/photo/kaynakli-fittings/baskili-flans-sema.jpg'

import img25 from '../../../../assets/photo/kaynakli-fittings/paslanmaz-yaka.jpg'

import Footer from '../../../layout/Footer.js';
import MainNavigation from '../../../layout/MainNavigation.js';
import Product from '../Product.js';

function WeldedFittings() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
            <div className="min-w-full mx-auto ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Dişli Fittings Malzemeler</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                <Product
                    img={img}
                    detailImg={img2}
                    headerFirstLine={"KAYNAK UÇLU ISO RAKOR"}
                    >
                </Product>

                <Product
                    img={img3}
                    detailImg={img4}
                    headerFirstLine={"KAYNAK UÇLU KONIK RAKOR"}
                    >
                </Product>

                <Product
                    img={img5}
                    detailImg={img6}
                    headerFirstLine={"90° ISO NORMUNDA DİKİŞLİ DİRSEK"}
                    >
                </Product>

                <Product
                    img={img7}
                    detailImg={img8}
                    headerFirstLine={"EŞİT TEE"}
                    >
                </Product>
                <Product
                    img={img9}
                    headerFirstLine={"REDÜKSİYON (İNEGAL) TEE"}
                    >
                </Product>

                <Product
                    img={img10}
                    detailImg={img11}
                    headerFirstLine={"PASLANMAZ KEP"}
                    >
                </Product>

                <Product
                    img={img12}
                    detailImg={img13}
                    headerFirstLine={"KONSANTRİK REDÜKSİYON"}
                    >
                </Product>

                <Product
                    img={img14}
                    detailImg={img15}
                    headerFirstLine={"EKSANTRİK REDÜKSİYON"}
                    >
                </Product>
                <Product
                    img={img16}
                    headerFirstLine={"ÇUBUK SAPLI KELEPÇE"}
                    >
                </Product>

                <Product
                    img={img25}
                    headerFirstLine={"PASLANMAZ YAKA"}
                    >
                </Product>

                <Product
                    img={img17}
                    detailImg={img18}
                    headerFirstLine={"PN6/PN1O/16 DÜZ FLANŞ"}
                    >
                </Product>

                <Product
                    img={img19}
                    detailImg={img20}
                    headerFirstLine={"PN6/1O/16/40 KÖR FLANŞ"}
                    >
                </Product>
                
                <Product
                    img={img21}
                    detailImg={img22}
                    headerFirstLine={"PN1O/16/40 KAYNAK BOYUNLU FLANŞ"}
                    >
                </Product>

                <Product
                    img={img25}
                    detailImg={img25}
                    headerFirstLine={"BASKILI FLANŞ"}
                    >
                </Product>
                
            </ul>
        </div>
            <Footer />
        </div>
        
    )
}

export default WeldedFittings