import Product from "../../Products/Product";
import img from '../../../assets/photo/disli-fittings/altikose-cift-tarafli-nipel.jpg';
import { Link } from "react-router-dom";

function ProfileCard() {
  const products = [
    { headerFirstLine: "Kaynaklı Fittings Malzemeler", img:img, path:"profil" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 flex flex-col items-center">
      <p className="text-center pt-24 mb-8 text-4xl text-gray-700 font-bold">
          Profil Ürünleri
        </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-7xl">
        {products.map((p, index) => (
          <Link to={`/${p.path}`} key={index}>
            <Product headerFirstLine={p.headerFirstLine} img={p.img} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;