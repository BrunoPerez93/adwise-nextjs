import Image from "next/image";

const AdwisePage = () => {
  return (
    <>
      <div className="relative w-full h-[600px] flex justify-center items-center">
        <Image
          src="/assets/Images/AdwiseUniversityFondo.jpg"
          layout="fill"
          objectFit="cover"
          alt="image of background"
          className="bg-fixed"
        />
        <h1 className="absolute text-white font-bold md:text-8xl text-3xl z-10">
          Adwise University
        </h1>
        <div className="bg-black bg-opacity-25 w-full h-full absolute"></div>
      </div>
      <div className="bg-white py-5 my-4">
        <h2 className="text-center text-blue py-5">
          Pronto más información sobre Adwise University
        </h2>
      </div>
    </>
  );
};

export default AdwisePage;
