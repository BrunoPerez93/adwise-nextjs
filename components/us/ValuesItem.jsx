"use client";

import { useState } from "react";

const ValuesItem = ({ title, text1, text2, text3, text4, text5, text2Class }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    "/assets/Images/triangule right Nosotros.png"
  );

  const handleToggle = () => {
    setIsListVisible(!isListVisible);
    setImageSrc(
      isListVisible
        ? "/assets/Images/triangule right Nosotros.png"
        : "/assets/Images/triangule down Nosotros.png"
    );
  };

  return (
    <div className="divButtonList flex flex-col justify-center items-center w-1/2 py-2">
      <button
        className="colorBlue buttonBorder font-bold w-full text-start p-2 bg-transparent flex"
        type="button"
        onClick={handleToggle}
      >
        <img
          id="toggleImage1"
          className="imageTriangle p-1"
          src={imageSrc}
          alt="triangule"
        />
        {title}
      </button>
      <ul
        className="ulList text-start w-full p-3"
        id="list1"
        style={{ display: isListVisible ? "block" : "none" }}
      >
        <li className="mt-2">{text1}</li>
        <li className={`mt-2 ${text2Class}`}>{text2}</li>
        <li className="mt-2">{text3}</li>
        <li className="mt-2">{text4}</li>
        <li className="mt-2">{text5}</li>
      </ul>
    </div>
  );
};

export default ValuesItem;
