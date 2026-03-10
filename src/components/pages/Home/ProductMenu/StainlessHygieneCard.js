import Product from "../../Products/Product";
import img from '../../../../assets/photo/dirsek/din-dirsek90.png';
import img2 from '../../../../assets/photo/tee/uzun-tee.png';
import img3 from '../../../../assets/photo/boru-aski-kelepce/boru-saplı-kelepçe.png';
import img4 from '../../../../assets/photo/filtre/paslanmaz-y-tipi-hat-filtresi.jpg';
import Footer from '../../../layout/Footer.js';
import MainNavigation from '../../../layout/MainNavigation.js';
import { Link } from "react-router-dom";

function StainlessHygieneCard() {
  const products = [
    { headerFirstLine: "paslanmaz-dirsek", img:img, path:"urunler/paslanmaz-dirsek" },
    { headerFirstLine: "paslanmaz-tee", img:img2, path:"urunler/paslanmaz-tee" },
    { headerFirstLine: "paslanmaz-boru-kelepce", img:img3, path:"urunler/paslanmaz-boru-kelepce" },
    { headerFirstLine: "paslanmaz-filtre", img:img4, path:"urunler/paslanmaz-filtre" }
  ];

  return (
    <div className=" h-screen w-screen overflow-x-hidden">            
            <MainNavigation />
    <div className="bg-gray-100 min-h-screen py-12 px-4 flex flex-col items-center">
      <p className="text-center pt-24 mb-8 text-4xl text-gray-700 font-bold">
          Hijyenik Paslanmaz Ürünler
        </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-7xl">
        {products.map((p, index) => (
          <Link to={`/${p.path}`} key={index}>
            <Product key={index} headerFirstLine={p.headerFirstLine} img={p.img} />
          </Link>
        ))}
      </ul>
    </div>
    <Footer />
        </div>
  );
}

export default StainlessHygieneCard;