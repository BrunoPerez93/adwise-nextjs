import React from "react";

const TitleAndSub = ({ title, text, image }) => {
  return (
    <>
      <div className={`flex justify-center items-center ${image} relative `}>
        <h1 className="text-5xl text-white font-bold text-header">{title}</h1>
        <div className="bg-black bg-opacity-25 w-full h-full absolute"></div>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-blue text-xl p-5 text-justify w-2/3 text-blue-950">
          {text}
        </p>
      </div>
    </>
  );
};

export default TitleAndSub;
