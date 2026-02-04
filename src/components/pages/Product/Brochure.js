import MarineFlipbook from "./MarineFlipBook.js";


export default function Brochure() {
  const allImages = require
    .context('../../../assets/table-images', false, /\.jpeg$/)
    .keys()
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0], 10);
      const numB = parseInt(b.match(/\d+/)[0], 10);
      return numA - numB;
    })
    .map((key) =>
      require('../../../assets/table-images' + key.replace('./', '/'))
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Marine Valves Flipbook Brochure
      </h1>

      <MarineFlipbook images={allImages} />
    </div>
  );
}
