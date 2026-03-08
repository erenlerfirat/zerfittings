import Product from "../Products/Product";
import img from '../../../assets/photo/boru/1.png';

function StainlessHygieneCard() {
  const products = [
    { header: "Ürün 1", img, detailImg: img },
    { header: "Ürün 2", img, detailImg: img },
    { header: "Ürün 3", img, detailImg: img },
    { header: "Ürün 4", img, detailImg: img }
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 flex flex-col items-center">
      <p className="text-center pt-24 mb-8 text-4xl text-gray-700 font-bold">
          Hijyenik Paslanmaz Ürünler
        </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 max-w-7xl">
        {products.map((p, index) => (
          <Product
            key={index}
            img={p.img}
            detailImg={p.detailImg}
            headerFirstLine={p.header}
          />
        ))}
      </ul>
    </div>
  );
}

export default StainlessHygieneCard;