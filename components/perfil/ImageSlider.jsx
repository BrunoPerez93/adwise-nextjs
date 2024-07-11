"use client";

import Image from "next/image";
import client from "../../public/assets/Perfiles Images/Clientes/index";
import { useEffect, useState } from "react";


const ImageSlider = () => {
  const logos = Object.values(client);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextLogos();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextLogos = () => {
    const newIndex = currentIndex + 4;
    if (newIndex < logos.length) {
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevLogos = () => {
    const newIndex = currentIndex - 4;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(Math.max(logos.length - 4, 0));
    }
  };

  return (
    <div className="logo-slider">
      <div className="logos-container">
        {logos.slice(currentIndex, currentIndex + 5).map((logo, index) => (
          <div key={index} className="m-10">
            <Image
              src={logo}
              alt={`Logo ${currentIndex + index + 1}`}
              width={150}
              height={200}
            />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevLogos} disabled={currentIndex === 0}>
          {"<"}
        </button>
        <button onClick={nextLogos} disabled={currentIndex + 4 >= logos.length}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
