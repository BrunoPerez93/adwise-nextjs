import Subclass from "@/components/areaEspecialidad/Subclass";
import "../../styles/areaEspecialidad.css";
import ListSubclass from "@/components/areaEspecialidad/ListSubclass";

const AreaPage = () => {
  return (
    <section className="p-5 bg-gray-100">
      <section className="flex justify-center items-center img-container img-container1 relative ">
        <h1 className="md:text-5xl text-xl text-white font-bold text-header">
          Áreas De Especialidad
        </h1>
        <div className="bg-black bg-opacity-25 w-full h-full absolute"></div>
      </section>

      <section className="p-10 text-blue-950">
        <p className="text-[21px]">
          Adwise se especializa en diferentes áreas de negocio, entre las que se
          incluyen la gestión del talento, la innovación de procesos, las
          finanzas y la auditoría, y el outsourcing. Cada una de estas áreas es
          importante para el éxito y la competitividad a largo plazo de una
          empresa.
        </p>
      </section>

      <ListSubclass />

    </section>
  );
};

export default AreaPage;
