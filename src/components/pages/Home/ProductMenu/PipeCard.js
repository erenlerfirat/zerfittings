import Product from "../../Products/Product";
import img from '../../../assets/photo/disli-fittings/altikose-cift-tarafli-nipel.jpg';
import { Link } from "react-router-dom";

function IndustrialCard() {
  const products = [
    { headerFirstLine: "Kaynaklı Fittings Malzemeler", img:img, path:"boru" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 flex flex-col items-center">
      <p className="text-center pt-24 mb-8 text-4xl text-gray-700 font-bold">
          Boru Ürünleri
        </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-7xl">
        
            <Link to={`/urunler/boru`} key={0}>
              <Product headerFirstLine={"Boru Ürünleri"} img={img} />
            </Link>
      </ul>
    </div>
  );
}

export default IndustrialCard;