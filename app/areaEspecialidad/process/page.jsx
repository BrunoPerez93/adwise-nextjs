import Items from "@/components/areaEspecialidad/Items";
import TitleAndSub from "@/components/areaEspecialidad/TitleAndSub";
import React from "react";
import "../../../styles/processInnovation.css";

const Process = () => {
  return (
    <section className="bg-gray-100 p-5">
      <TitleAndSub
        image="img-container"
        title="Process Innovation"
        text="Process Innovation, o innovación de procesos, se refiere a la creación o mejora de procesos empresariales para aumentar la eficiencia, productividad y calidad de los productos o servicios ofrecidos. Implica reorganizar tareas, implementar nuevas tecnologías, mejorar la capacitación y eliminar procesos innecesarios para mejorar la satisfacción del cliente, reducir costos y mejorar la adaptabilidad al cambio de mercado. La innovación de procesos es importante para mantener la competitividad y sostenibilidad a largo plazo, mejorar la eficiencia y reducir costos empresariales."
      />
      <section className="gap-5 w-[90%] flex justify-center items-center flex-wrap ">
        <Items
          title="Standar Execution Programs"
          alt="Standar Execution Programs"
          image="/assets/Area de Especialidad/Process/process1.png"
          text="Sistema de mejora continua enfocados hacia la estandarización de conformidad con normas internacionales"
        />
        <Items
          title="Project Management Solutions"
          alt="Project Management Solutions"
          image="/assets/Area de Especialidad/Process/process2.png"
          text="Metodología para la planeación, dirección y control de proyectos mediante un sistema de ejecución de conformidad con el PMI"
        />
        <Items
          title="Indicator Model Design"
          alt="Indicator Model Design"
          image="/assets/Area de Especialidad/Process/process3.png"
          text="Diseño e implementación de sistemas de información gerencial para la toma de decisiones"
        />
        <Items
          title="Performance Alignment & Strategy"
          alt="Performance Alignment & Strategy"
          image="/assets/Area de Especialidad/Process/process4.png"
          text="Programas de administración del cambio para el alineamiento del desempeño y la estrategia"
        />
        <Items />
        <Items
          title="Savings & Costs Reduction Strategy"
          alt="Savings & Costs Reduction Strategy"
          image="/assets/Area de Especialidad/Process/process5.jpeg"
          text="Programa para la generación de rentabilidad mediante la optimización de procesos, reducción de costos y mejora de eficiencias"
        />
      </section>
    </section>
  );
};

export default Process;
