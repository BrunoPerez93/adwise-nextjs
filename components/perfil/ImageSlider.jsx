"use client";

import Image from "next/image";
import client from "../../public/assets/Perfiles Images/Clientes/index";
import { useEffect, useState } from "react";

const ImageSlider = () => {
  const logos = Object.values(client);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const interval = setInterval(() => {
      nextLogos();
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  const nextLogos = () => {
    const newIndex = isMobile ? currentIndex + 1 : currentIndex + 5;
    if (newIndex < logos.length) {
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevLogos = () => {
    const newIndex = isMobile ? currentIndex - 1 : currentIndex - 5;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    } else {
      setCurrentIndex(Math.max(logos.length - (isMobile ? 1 : 5), 0));
    }
  };

  return (
    <>
      <h2 className="font-bold md:text-4xl text-xl mt-5 text-blue-950">
        Clientes
      </h2>
      <div className="logo-slider">
        <div className="logos-container">
          {logos
            .slice(currentIndex, currentIndex + (isMobile ? 1 : 5))
            .map((logo, index) => (
              <div key={`${currentIndex}-${index}`} className="m-10 logo fade-in">
                <Image
                  src={logo}
                  alt={`Logo ${currentIndex + index + 1}`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
