import TitleAndSub from "@/components/areaEspecialidad/TitleAndSub";
import "../../../styles/FinanceAudit.css";
import Items from "@/components/areaEspecialidad/Items";

const Finace = () => {
  return (
    <section className="bg-gray-100 p-5">
      <TitleAndSub
        image="img-container"
        title="Finance Audit"
        text="Son áreas esenciales de la gestión empresarial encargadas de la gestión financiera, el control financiero y la evaluación independiente de la situación financiera de una empresa. Las finanzas incluyen la planificación financiera, la gestión de presupuestos y tesorería, la inversión y financiación, y la preparación de informes financieros, mientras que la auditoría se enfoca en la revisión y evaluación independiente de los estados financieros de la empresa. Ambas áreas son fundamentales para garantizar la sostenibilidad y salud financiera de la empresa."
      />
      <section className="gap-5 w-[90%] flex justify-center items-center flex-wrap ">
        <Items
          title="Resources Management Insights"
          alt="Resources Management Insights"
          image="/assets/Area de Especialidad/Finance/finance1.jpeg"
          text="Servicios integrados en asesoría financiera y contable enfocados en el mejoramiento de la gestión financiera"
        />
        <Items
          title="Audit Best Practices"
          alt="Audit Best Practices"
          image="/assets/Area de Especialidad/Finance/finance3.jpeg"
          text="Metodología para la planeación, dirección y control de proyectos mediante un sistema de ejecución de conformidad con el PMI"
        />
        <Items
          title="Financial Information Management"
          alt="Financial Information Management"
          image="/assets/Area de Especialidad/Finance/finance4.jpeg"
          text="Sistemas de integración, consolidación y de la información financiera para múltiples negocios, contables y territoriales"
        />
        <Items
          title="Expertise Delivery Center"
          alt="Expertise Delivery Center"
          image="/assets/Area de Especialidad/Finance/finance2.jpeg"
          text="Estrategias para la innovación y optimización de los recursos y procesos comunes, afianzando la efectividad y competitividad operativa"
        />
        <Items />
        <Items
          title="Compliance Analysis Review"
          alt="Compliance Analysis Review"
          image="/assets/Area de Especialidad/Finance/finance5.jpeg"
          text="Programas para la evaluación especializada del cumplimiento de disposiciones específicas y la efectividad del sistema de control interno"
        />
      </section>
    </section>
  );
};

export default Finace;
