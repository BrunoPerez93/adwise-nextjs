import Items from "@/components/areaEspecialidad/Items";
import TitleAndSub from "@/components/areaEspecialidad/TitleAndSub";
import "../../../styles/Outsourcing.css";

const Outsourcing = () => {
  return (
    <section className="bg-gray-100 p-5">
      <TitleAndSub
        image="img-container"
        title="Outsourcing"
        text="Es la contratación de una empresa externa para realizar tareas o funciones empresariales que normalmente se llevan a cabo dentro de la organización. Se puede aplicar a una amplia gama de áreas, como contabilidad, marketing, soporte técnico y gestión de recursos humanos. Las empresas lo usan para reducir costos, mejorar la eficiencia y acceder a habilidades especializadas. Sin embargo, también puede haber desventajas, como la pérdida de control y la falta de calidad del trabajo. En general, el outsourcing es una práctica empresarial que tiene pros y contras."
      />
      <section className="gap-5 w-[90%] flex justify-center items-center flex-wrap ">
        <Items
          title="Talent Workforce Outsourcing"
          alt="Talent Workforce Outsourcing"
          image="/assets/Area de Especialidad/Outsourcing/out1.jpeg"
          text="Servicios de tercerización de personal, temporal o permanente"
        />
        <Items
          title="Information Tech & Mobile Development"
          alt="Information Tech & Mobile Development"
          image="/assets/Area de Especialidad/Outsourcing/out3.jpeg"
          text="Desarrollo de aplicaciones tecnológicas de última generación para la productividad"
        />
        <Items
          title="Payroll Management"
          alt="Payroll Management"
          image="/assets/Area de Especialidad/Outsourcing/out4.jpeg"
          text="Procesamiento administrativo y atención de clientes en nóminas tercerizadas"
        />
        <Items
          title="Smart Process Outsourcing"
          alt="Smart Process Outsourcing"
          image="/assets/Area de Especialidad/Outsourcing/out2.jpeg"
          text="Servicios de administración y ejecución de funciones no medulares para el negocio de nuestros clientes"
        />
        <Items />
        <Items
          title="Turn Key Deriverables"
          alt="Turn Key Deriverables"
          image="/assets/Area de Especialidad/Outsourcing/out3.jpeg"
          text="Solución que asegura entregables de paquete completo » end to end» de conformidad con un Acuerdo de Nivel de Servicio"
        />
      </section>
    </section>
  );
};

export default Outsourcing;
