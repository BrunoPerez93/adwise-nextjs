import React from "react";
import Subclass from "./Subclass";

const ListSubclass = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <Subclass
        title="Talent Management"
        text="Se enfoca en atraer, desarrollar, motivar y retener a empleados altamente calificados y comprometidos para contribuir al éxito de la empresa."
        classImage="img-container2"
        direction='/areaEspecialidad/talent'
      />
      <Subclass
        title="Process Innovation"
        text="Se refiere a la mejora de procesos empresariales para aumentar la eficiencia, productividad y calidad de los productos o servicios ofrecidos."
        classImage="img-container3"
        direction='/areaEspecialidad/process'
      />
      <Subclass
        title="Finance&Audit"
        text="Las finanzas y la auditoría son fundamentales para garantizar la sostenibilidad y salud financiera de la empresa."
        classImage="img-container4"
        direction='/areaEspecialidad/finance'
      />
      <Subclass
        title="Outsourcing"
        text="Se utiliza para reducir costos, mejorar la eficiencia y acceder a habilidades especializadas."
        classImage="img-container5"
        direction='/areaEspecialidad/outsourcing'
      />
    </div>
  );
};

export default ListSubclass;
