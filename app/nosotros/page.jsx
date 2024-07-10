import Image from "next/image";
import "../../styles/nosotros.css";

const UsPage = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="text-center py-10">
          <h1 className="text-blue-950 md:text-7xl text-3xl ">Nosotros</h1>
        </div>
        <div className="divContainer text-blue">
          <div className="divPhoto">
            <img src="assets/Images/Max Photo.png" alt="Imagen de Max" />
          </div>
          <div className="divContaienrText text-blue-950">
            <h2 className="font-bold text-4xl">CEO</h2>
            <p className="mt-3">
              Max Santamaría Gutiérrez es el CEO y Senior Partner de ADWISE
              Corporate Advisory para Latinoamérica, con más de 20 años de
              experiencia en el mercado, es psicólogo graduado de la Universidad
              de Costa Rica y ha obtenido especializaciones en Negociación,
              Entrenamiento en Educación para el Desarrollo Humano y
              Asesoramiento Internacional en Psicología de los Procesos
              Grupales.
            </p>
            <p className="mt-3">
              Ha desarrollado investigaciones en áreas como Artificial
              Intelligence, Human Resources Scorecard, Desarrollo Corporativo,
              Transformación Digital, Leadership Awareness, Inteligencia
              Emocional, Sistemas de Gestión para la Productividad y
              Programación Neurolingüística en las organizaciones.
            </p>
            <p className="mt-3">
              Ha trabajado como consultor en América Latina para empresas de
              diferentes rubros y clústeres de negocio, incluyendo consumo
              masivo, petróleo, empaque, agroindustria, servicios, banca,
              tecnología, construcción, manufactura, exportación, seguridad,
              trading, ONG´s, desarrollo inmobiliario y muchas otras.
            </p>
          </div>
        </div>
      </section>

      <section className="backgroundInfo flex justify-center items-center">
        <h2 className="textAppear text-white md:text-7xl text-4xl ">
          Información de la Empresa
        </h2>
      </section>

      <section className="p-2 mb-5">
        <div className="divCointainerMision bg-white flex">
          <div className="divMisionText w-1/2 flex flex-col justify-center items-start p-5">
            <h2 className="md:text-5xl text-2xl font-bold">Misión</h2>
            <p className="md:text-3xl text-xl">
              Proveemos soluciones integrales de asesoría en negocios con
              enfoque en rentabilidad.
            </p>
          </div>
          <div className="divImageMision p-2">
            <img
              className="imageMisiones"
              src="/assets/Images/ImageMisionesNosotros.png"
              alt="imagen de misiones"
            />
          </div>
        </div>
      </section>

      <section className=" p-2">
        <div className="backgroundBlue divCointainerVision flex">
          <div className="divVisionImage w-1/2 p-2">
            <img
              className="imageVision"
              src="/assets/Images/Image Vision Nosotros.png"
              alt="imagen de vision"
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
    </>
  );
};

export default UsPage;
