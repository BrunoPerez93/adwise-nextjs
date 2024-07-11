import Image from "next/image";

const Vision = () => {
  return (
    <section className=" p-2">
      <div className="backgroundBlue divCointainerVision flex">
        <div className="divVisionImage w-1/2 p-2">
          <Image
            className="imageVision"
            src="/assets/Images/Image Vision Nosotros.png"
            alt="imagen de vision"
            width={600}
            height={300}
          />
        </div>
        <div className="divVisionText flex flex-col justify-center items-start text-white p-5">
          <h2 className="md:text-5xl text-2xl font-bold">Visión</h2>
          <p className="md:text-3xl text-xl">
            Seremos los principales aliados estratégicos de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
