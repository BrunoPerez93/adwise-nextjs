"use client";

import React, { useState } from "react";
import ValuesItem from "./ValuesItem";

const Values = () => {
  return (
    <section className="flex flex-col justify-center items-center my-7">
      <h1 className="font-bold text-blue-950 md:text-5xl text-2xl">Valores</h1>

      <div className="w-full flex flex-col justify-center items-center colorBlue ">
        <ValuesItem
          title="EJECUCIÓN"
          text1="Es hacer que las cosas sucedan."
          text2="Es ir siempre un paso más allá."
          text3="Implica estar enfocados en el cliente."
          text4="Implica ser efectivos."
          text5="Implica estar comprometidos."
        />
        <ValuesItem
          title="EXCELENCIA"
          text1="Es hacer las cosas bien desde la primera vez."
          text2="Implica trabajo en equipo."
          text3="Implica ser eficientes."
          text4="Implica superar las expectativas del cliente."
          text5="Implica estar comprometidos."
        />
        <ValuesItem
          title="RENTABILIDAD"
          text1="Es enfocarse en resultados y no en actividades."
          text2="Es ser efectivos y eficientes."
          text3="Es hacer más con la menor cantidad de recursos."
          text4="Implica estar comprometidos."
        />
        <ValuesItem
          title="TRANSPARENCIA"
          text1="Es ser éticos y leales con nuestros clientes, colaboradores, proveedores, aliados y con nuestra empresa."
          text2="Implica comunicación abierta entre colaboradores."
          text3="Implica estar comprometidos."
        />
        <ValuesItem
          title="CRECIMIENTO PERSONAL"
          text1="Es buscar el crecimiento como personas y como profesionales."
          text2="Es generar un ambiente laboral que permita sentirnos felices y realizados en cada día de trabajo."
          text3="Implica mejorar continuamente las condiciones laborales."
          text4="Implica estar comprometidos."
        />
      </div>
    </section>
  );
};

export default Values;
