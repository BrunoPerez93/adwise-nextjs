"use client";

import Image from "next/image";
import "../styles/Index.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonArea = () => {
    router.push("/areaEspecialidad");
  };

  const handleButtonProyecto = () => {
    router.push("/perfiles");
  };

  const handleButtonAdwise = () => {
    router.push("/adwiseUniversity");
  };

  return (
    <section className=" bg-gray-100 p-2">
      <div className="relative w-full h-[600px]">
        <Image
          src="/assets/Images/IndexFondo.jpg"
          layout="fill"
          objectFit="cover"
          alt="image of background"
          className="absolute" 
        />
        <div className="text-blue-950 z-10 absolute inset-0  flex flex-col justify-center items-start ml-10">
          <h1 className="mb-4 font-semibold sm:text-[56px] text-[30px]">
            Adwise Corporate Advisory
          </h1>
          <p className="max-w-[750px]">
            Consultoría especializada en Educación, Gestión del Capital Humano,
            Innovación, Desarrollo Organizacional, Gestión del Cambio,
            Tercerización y Programas para el Desarrollo del Talento
          </p>
          <button
            type="button"
            onClick={handleButtonArea}
            className="mt-5 button-adwise"
          >
            más información ⭢
          </button>
        </div>
      </div>
      <div className="mt-5 p-[5%]">
        <div className="flex justify-between items-center gap-5 text-blue-950">
          <div className="w-1/2  p-3 p-lg-5">
            <h2 className="mb-2 font-bold text-2xl">Proyectos</h2>
            <p>
              Como empresa de consultoría, nos enfocamos en ofrecer soluciones
              innovadoras y personalizadas para ayudar a nuestros clientes a
              alcanzar sus objetivos comerciales. Aquí presentamos algunos de
              nuestros casos de éxito más destacados.
            </p>
            <button
              type="button"
              onClick={handleButtonProyecto}
              className="mt-5 button-adwise"
            >
              ver más ⭢
            </button>
          </div>
          <div className="w-1/2 p-3 p-lg-5">
            <h2 className="mb-2 font-bold text-2xl">Adwise University</h2>
            <p>
              Adwise University es un Centro de Formación de Alto Nivel
              Ejecutivo que ofrece una oferta académica enfocada en la
              implementación exitosa de la Transformación Digital en Gobiernos,
              Entidades Financieras y Organismos de Cooperación Internacional.
              Con nosotros obtendrás una formación de alta calidad para liderar
              el cambio hacia un futuro más digital y eficiente en tu
              organización.
            </p>
            <button
              type="button"
              onClick={handleButtonAdwise}
              className="mt-5 button-adwise"
            >
              ver más ⭢
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
