import React from "react";

const Mision = () => {
  return (
    <section className="p-2 mb-5">
      <div className="divCointainerMision bg-white flex">
        <div className="divMisionText w-1/2 flex flex-col justify-center items-start p-5">
          <h2 className="md:text-5xl text-2xl font-bold">Misión</h2>
          <p className="md:text-3xl text-xl">
            Proveemos soluciones integrales de asesoría en negocios con enfoque
            en rentabilidad.
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
  );
};

export default Mision;
