import { Link } from "react-router-dom";
import Product from "../../Products/Product";
import img from '../../../../assets/photo/boru/1.png';

function ProductsCard() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gray-100">
      <div className="min-w-full mx-auto">
        <p className="text-center pt-24 mb-8 text-4xl text-gray-700 font-bold">
          Ürünler
        </p>

        <ul className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto py-6">
          <Link to={"/boru"}>
            <Product
              img={img}
              detailImg={img}
              headerFirstLine={"Hijyenik Paslanmaz Ürünler"}
            />
          </Link>
          <Link to={"/boru"}>
            <Product
              img={img}
              detailImg={img}
              headerFirstLine={"Endüstriyel Paslanmaz Ürünler"}
            />
          </Link>
          <Link to={"/boru"}>
            <Product
              img={img}
              detailImg={img}
              headerFirstLine={"Boru"}
            />
          </Link>
          <Link to={"/profil"}>
            <Product
              img={img}
              detailImg={img}
              headerFirstLine={"Profil"}
            />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default ProductsCard;