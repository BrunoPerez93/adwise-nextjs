import Image from "next/image";
import React from "react";

const Items = ({ image, title, text, alt }) => {
  return (
    <div className="flex flex-col w-1/4 gap-3 text-center justify-center items-center">
      {image && (
        <Image
          className="rounded-full"
          src={image}
          alt={alt || "Default Alt Text"}
          width={400}
          height={400}
          objectFit="cover"
        />
      )}
      <h2 className="font-semibold text-blue-950 md:text-3xl text-xl">
        {title}
      </h2>
      <p className="text-sm text-blue-950">{text}</p>
    </div>
  );
};

export default Items;
