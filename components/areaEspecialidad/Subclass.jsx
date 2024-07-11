import Link from "next/link";
import React from "react";

const Subclass = ({ classImage, title, text, direction }) => {
  return (
    <div className="md:w-[45%] w-[95%] m-2">
      <div className={`flex justify-center items-center img-container ${classImage}`}>
        <Link href={`${direction}`} className="link">
          <h1 className="md:text-5xl text-2xl text-white link">{title}</h1>
        </Link>
      </div>
      <div className="box-text mt-2">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Subclass;
