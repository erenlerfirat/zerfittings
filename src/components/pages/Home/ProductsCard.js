import Footer from "../../layout/Footer";
import MainNavigation from "../../layout/MainNavigation";
import Product from "../Products/Product";

import img from '../../../assets/photo/boru/1.png'
import { Link } from "react-router-dom";

function ProductsCard() {


    return (
        <div className=" h-screen w-screen overflow-x-hidden">
            <div className="min-w-full mx-auto ">
                <p className="text-center pt-24 mb-8 text-4xl text-gray-700"> Ürünler</p>
                <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto py-6 text-gray-700">
                    <Link to={"/boru"}> <Product  img={img}  detailImg={img}  headerFirstLine={"Hijyenik Paslanmaz Ürünler"}> </Product>  </Link>                 
                    <Link to={"/boru"}> <Product  img={img}  detailImg={img}  headerFirstLine={"Endüstriyel Paslanmaz Ürünler"}> </Product>  </Link>
                    <Link to={"/boru"}> <Product  img={img}  detailImg={img}  headerFirstLine={"Boru"}> </Product>  </Link>
                    <Link to={"/profil"}> <Product  img={img}  detailImg={img}  headerFirstLine={"Profil"}> </Product>  </Link>
                    
                </ul>
            </div>
        </div>
        
    )
}

export default ProductsCard