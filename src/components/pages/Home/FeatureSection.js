import { Link } from "react-router-dom";
import evergreen from "../../../assets/evergreen2.jpg";
import loadedship from "../../../assets/loadedship.jpg";
import valves from "../../../assets/valves.jpg";
import valves2 from "../../../assets/valves2.jpg";

const FeatureSection = () => {
  const featureSections = [
    {
      img: evergreen,
      header: "Zer Fittings’te Uzmanlık",
      desc: "Zer Fittings, on yılların endüstri deneyimini kullanarak dünya çapındaki müşterilerin temel vana ve fitting ihtiyaçlarını karşılamaktadır. Türkiye, Singapur, Hollanda, Kore ve Çin’deki tesislerimizle, güvenilir JIS ve DIN standartlı deniz vanaları ile tam kapsamlı kelebek vana yedek parçaları sunuyoruz.",
      elements: [
        "On yıllara dayanan teknik uzmanlık ve kanıtlanmış sektör bilgisi ile desteklenen güvenilir çözümler.",
        "Tam uyumlu ürünler, gemi sahipleri, tersaneler ve deniz hizmet sağlayıcıları için kesintisiz operasyon sağlar.",
        "Stratejik olarak konumlanmış küresel stok noktaları sayesinde hızlı ve verimli hizmet.",
        "Gemi operasyonlarının kesintisiz çalışmasını sağlayan çözüm odaklı yaklaşım.",
      ],
    },
    {
      img: loadedship,
      header: "Küresel Uyumluluk ve Sektör Standardı Güvencesi",
      desc: "Zer Fittings olarak, çevresel sorumluluk ve operasyonel güvenliğe güçlü bir bağlılık gösteriyor, uluslararası kabul görmüş yönetmelik ve uyumluluk standartlarına uyuyoruz:",
      elements: [
        "Ürünlerimizin sorumlu ve sürdürülebilir deniz operasyonlarını desteklemesini sağlamak için küresel çevre yönergelerine sıkı uyum.",
        "Önde gelen uluslararası denizcilik kuruluşları tarafından belirlenen güvenlik ve kalite standartlarına tam uyum.",
      ],
    },
  ];

  return (
    <>
      {featureSections.map((feature, index) => (
        <Feature
          key={index}
          img={feature.img}
          header={feature.header}
          desc={feature.desc}
          elements={feature.elements}
          reverse={index % 2 === 1}
        />
      ))}
    </>
  );
};

export default FeatureSection;

function Feature({ img, header, desc, elements, reverse }) {
  return (
    <div className="py-16 text-gray-500 border-y border-gray-200">
      <div
        className={`container mx-auto flex flex-col lg:flex-row items-stretch 
                ${reverse ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Image Section */}
        <div className="lg:w-1/2 px-8">
          <img
            src={img}
            alt="img"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 px-8 mt-8 lg:mt-0 rounded-lg">
          <h2 className="text-4xl font-bold mb-4 mt-4 text-gray-600">
            {header}
          </h2>

          <p className="mb-6">{desc}</p>

          <ul className="space-y-4 mb-6">
            {elements.map((el, i) => (
              <li key={i} className="flex items-start">
                <svg
                  className="w-6 h-6 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{el}</span>
              </li>
            ))}
          </ul>
          <Link to="/Contact">
            <button className="my-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
              İletişim
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
