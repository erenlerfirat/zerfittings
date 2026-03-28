import { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

function Product({ img, headerFirstLine, detailImg, imagestyle, clickable }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasDetail = Boolean(detailImg);

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsModalOpen(false);
        }
      }}
    >
      <div className="relative w-[95vw] h-[80vh] flex items-center justify-center">
        <button
          className="absolute -top-2 right-0 text-white/50 text-6xl hover:text-white transition-colors z-[1001]"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </button>

        <img
          src={detailImg}
          alt={headerFirstLine}
          className={`w-full h-full object-contain transition-transform duration-500 hover:scale-105 block 
          ${hasDetail || clickable ? "cursor-pointer" : ""} 
          ${imagestyle || ""}`}
        />
      </div>
    </div>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileHover={{ scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col mx-auto mb-0 mt-2 bg-gray-50 rounded-md shadow-lg overflow-hidden border border-gray-200 w-full max-w-[420px] h-fit"
      >
        <div className="relative overflow-hidden aspect-[4/3] bg-white flex items-center justify-center p-4">
          <img
            onClick={() => hasDetail && setIsModalOpen(true)}
            src={img}
            alt={headerFirstLine}
            className={`w-full h-full object-contain transition-transform duration-500 hover:scale-105 block 
              ${hasDetail || clickable ? "cursor-pointer" : ""}`}
          />
        </div>

        <button
          disabled={!hasDetail && !clickable}
          onClick={() => hasDetail && setIsModalOpen(true)}
          className={`w-full py-6 px-4 font-bold text-lg  tracking-tight transition-all duration-200 
            flex flex-col items-center justify-center text-gray-500 
            ${hasDetail || clickable ? "cursor-pointer" : "cursor-disabled"}`}
        >
          <span className="leading-tight">
            {headerFirstLine.toLocaleUpperCase("tr-TR")}
          </span>
        </button>
      </motion.div>

      {isModalOpen && hasDetail && createPortal(modal, document.body)}
    </>
  );
}

export default Product;
