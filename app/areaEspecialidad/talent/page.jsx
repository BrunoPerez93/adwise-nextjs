import "../../../styles/TalentManagment.css";
import TitleAndSub from "@/components/areaEspecialidad/TitleAndSub";
import Items from "@/components/areaEspecialidad/Items";

const talentPage = () => {
  return (
    <section className="bg-gray-100 p-5">
      <TitleAndSub
        image="img-container"
        title="Talent Management"
        text="Talent Management es el conjunto de prácticas y procesos utilizados por las organizaciones para atraer, desarrollar, motivar y retener a empleados altamente calificados y comprometidos que contribuyan significativamente al éxito de la empresa. Las empresas que implementan una estrategia efectiva de gestión del talento son más propensas a retener y atraer a los mejores talentos, mejorar el rendimiento general y mantenerse competitivas a largo plazo en un mercado cambiante."
      />

      <section className="gap-5 w-[90%] flex justify-center items-center flex-wrap ">
        <Items
          title="Executive Search"
          text="Sistema de reclutamiento basado en competencias e indicadores de gestión"
          alt="Executive Search"
          image="/assets/Area de Especialidad/Talent/talent1.png"
        />
        <Items
          title="360 Perspective Analysis"
          text="Programa de medición de la satisfacción laboral y de la opinión de públicos interesados para el cambio"
        />
        <Items
          title="Competence Measurement System"
          text="Sistema de evaluación para identificar brechas de competencias de una persona versus el puesto"
          alt="Competence Measurement System"
          image="/assets/Area de Especialidad/Talent/talent2.png"
        />
        <Items
          title="Leadership Aceleration Program"
          text="Asesoría personalizada en el desarrollo de competencias para mejorar el desempeño"
          alt="Leadership Aceleration Program"
          image="/assets/Area de Especialidad/Talent/talen3.png"
        />
        <Items />
        <Items
          title="Five Steps For Performance"
          text="Programa de entrenamiento compuesto por cinco niveles de ejecución del método SMART"
          alt="Five Steps For Performance"
          image="/assets/Area de Especialidad/Talent/talent4.png"
        />
      </section>
    </section>
  );
};

export default talentPage;
