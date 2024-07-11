import Image from "next/image";

const Responsability = () => {
  return (
    <section className="flex flex-col justify-center items-center w-auto">
      <h2 className="colorBlue p-1 md:text-5xl text-2xl font-bold">
        RESPONSABILIDAD SOCIAL CORPORATIVA
      </h2>
      <div className=" p-5">
        <Image
          src="/assets/Images/responsabilidad Image Nosotros.png"
          width={1000}
          height={600}
          alt="responsabilidad"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Responsability;
