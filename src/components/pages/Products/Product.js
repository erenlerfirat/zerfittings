import { useState } from "react";

function Product({ img, headerFirstLine, detailImg,imagestyle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasDetail = Boolean(detailImg);

  return (
    /* Added h-fit to ensure the card only takes the height it needs */
    <div className="flex flex-col mx-auto mb-0 mt-2 bg-gray-50 rounded-md shadow-lg overflow-hidden border border-gray-200 w-full max-w-[420px] h-fit">
      
      {/* 1. Image Section */}
      <div className="relative overflow-hidden aspect-[4/3] block bg-white flex items-center justify-center p-4">
  <img 
    onClick={() => setIsModalOpen(true)}
    src={img} 
    alt={headerFirstLine}
    className={`w-full h-full object-contain transition-transform duration-500 hover:scale-105 block 
      ${hasDetail ? "cursor-pointer" : ""}`} 
  />
</div>

      {/* 2. Button Section - Now perfectly flush with image and container bottom */}
      <button 
        disabled={!hasDetail}
        onClick={() => setIsModalOpen(true)}
        className={`w-full py-6 px-4 font-bold text-lg uppercase tracking-tight transition-all duration-200 flex flex-col items-center justify-center border-none outline-none
           text-gray-500  
          ${hasDetail 
            ? "cursor-pointer" 
            : "cursor-disabled"
          }`}
      >
        <span className="leading-tight">{headerFirstLine}</span>
        
      </button>

      {/* Modal remains unchanged as it is fixed-position */}

        {isModalOpen && hasDetail && (
          <div 
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)} 
          >
            <div 
              className="relative w-[95vw] h-[95vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Close Button - Positioned to not overlap the image if possible */}
              <button 
                className="absolute -top-2 right-0 text-white/50 text-6xl hover:text-white transition-colors z-[1001]"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              
              {/* Image takes up every available pixel within the 95vw/vh bounds */}
              <img 
                src={detailImg} 
                alt={`${headerFirstLine} Detail`} 
                className="w-full h-full object-contain ]"
              />
            </div>
          </div>
        )}
    </div>
  );
}

export default Product;