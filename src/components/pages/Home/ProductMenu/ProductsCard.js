// ProductsPage.js
import Product from "../../Products/Product";
import imgIndustrial from '../../../../assets/photo/disli-fittings/altikose-cift-tarafli-nipel.jpg';
import imgStainless from '../../../../assets/photo/dirsek/din-klempli-dirsek.png';
import imgBoru from '../../../../assets/photo/boru/boru.jpg';
import imgProfil from '../../../../assets/photo/profil/profiller.jpg';
import { Link } from "react-router-dom";

function ProductsPage() {
  const categories = [
    { name: "industrial", title: "Endüstriyel Ürünler", img: imgIndustrial, path: "/industrial" },
    { name: "stainless", title: "Hijyenik Paslanmaz Ürünler", img: imgStainless, path: "/stainless" },
    { name: "profil", title: "Profil Ürünleri", img: imgProfil, path: "/profil" },
    { name: "boru", title: "Boru Ürünleri", img: imgBoru, path: "/boru" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 flex flex-col items-center">
      <p className="text-center pt-12 mb-8 text-4xl text-gray-700 font-bold">
        Ürün Kategorileri
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-11/12 max-w-7xl">
        {categories.map((c, i) => (
          <Link key={i} to={c.path}>
            <Product headerFirstLine={c.title} img={c.img} clickable />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;