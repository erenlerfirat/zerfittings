import { useEffect, useState } from "react";

function Process() {
  const stats = [
    { label: "Teknik Ürün Çeşidi  ", value: 10000, plus: true },
    { label: "365 Gün Servis", value: 365 },
    { label: "5000+ Müşteri Memnuniyeti", value: 5000, plus: true },
    { label: "7/24 Canlı Destek", value: 24 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const value = Math.round(stat.value * progress);
        setCounts(prev => {
          const copy = [...prev];
          copy[index] = value;
          return copy;
        });
        if (frame === totalFrames) clearInterval(counter);
      }, duration / totalFrames);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-12 px-4
                    h-auto sm:h-80 md:h-76 lg:h-[400px]">      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center
                       transform transition duration-300 hover:scale-105 hover:shadow-xl h-32 md:h-40"
          >
            <span className="text-3xl md:text-4xl font-bold text-blue-600">
              {counts[index]}{stat.plus ? "+" : ""}
            </span>
            <span className="mt-2 text-lg md:text-xl font-medium text-gray-700 text-center px-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;