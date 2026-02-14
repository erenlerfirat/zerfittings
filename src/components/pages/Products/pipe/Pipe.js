import cizelge from '../../../../assets/photo/boru/1.png'
import minicizelge from '../../../../assets/photo/boru/2.png'
import borucizim from '../../../../assets/photo/boru/boru-cizim.jpg'
import boru from '../../../../assets/photo/boru/boru.jpg'

import Footer from '../../../layout/Footer';
import MainNavigation from '../../../layout/MainNavigation';

function Pipe() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      
      <MainNavigation />

      <section className="w-full py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Üst Grid Alanı */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Sol Büyük Görsel */}
            <div className="w-full h-[400px]">
              <img
                src={boru}
                alt="Main"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>

            {/* Sağ İçerik */}
            <div className="flex flex-col gap-6">
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Endüstriyel Çözümlerde Güçlü Yapılar
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src={minicizelge}
                  alt="Small 1"
                  className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
                />
                <img
                  src={borucizim}
                  alt="Small 2"
                  className="w-full h-40 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
                />
              </div>

            </div>
          </div>

          {/* Alt Full Width Büyük Görsel */}
          <div className="w-full">
            <img
              src={cizelge}
              alt="Alt Büyük Görsel"
              className="w-full h-auto shadow-xl"
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Pipe;
