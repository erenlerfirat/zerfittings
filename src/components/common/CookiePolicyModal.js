import { useState, useEffect } from "react";

const CookiePolicyModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) setShowModal(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShowModal(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieAccepted", "false");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center">
      <div className="bg-white w-full p-4 shadow-lg border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 animate-fadeIn">
        
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">
            Çerez Politikası
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Web sitemiz deneyiminizi geliştirmek için çerezler kullanmaktadır. Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 md:gap-4 flex-wrap mt-2 md:mt-0 w-full md:w-auto">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md w-full md:w-auto transition-colors"
          >
            Kabul Et
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-md w-full md:w-auto transition-colors"
          >
            Reddet
          </button>
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CookiePolicyModal;