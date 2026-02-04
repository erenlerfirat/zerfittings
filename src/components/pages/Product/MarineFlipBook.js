import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import jsPDF from "jspdf";

export default function MarineFlipbook({ images }) {
  const bookRef = useRef();
  const wrapperRef = useRef();


  // PDF EXPORT 
  const handleDownloadPdf = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

    images.forEach((img, i) => {
      pdf.addImage(img, "JPEG", 0, 0, pageW, pageH);
      if (i < images.length - 1) pdf.addPage();
    });

    pdf.save("marine-valves-brochure.pdf");
  };

  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="flex gap-4 mb-6">        
        <button onClick={handleDownloadPdf} className="px-4 py-2 bg-green-600 text-white rounded">
          Download PDF
        </button>
      </div>

      {/* Wrapper FOR fullscreen */}
      <div ref={wrapperRef} className="flex justify-center w-full">
        <HTMLFlipBook
  ref={bookRef}
  width={500}
  height={700}
  size="fixed"
  minWidth={500}
  maxWidth={500}
  minHeight={700}
  maxHeight={700}
  drawShadow={true}
  showCover={false}
  mobileScrollSupport={true}
  className="shadow-xl"
>
  {images.map((img, index) => (
    <div key={index} className="relative w-full h-full bg-white">
      <img
        src={img}
        alt=""
        className="w-full h-full object-contain"
      />
      <span className="absolute bottom-3 right-4 text-xs bg-white/70 px-2 py-1 rounded">
        {index + 1}
      </span>
    </div>
  ))}
</HTMLFlipBook>

      </div>
    </div>
  );
}
