import ImageSlider from "@/components/perfil/ImageSlider";
import "../../styles/perfiles.css";
import ListValues from "@/components/perfil/ListValues";

const ProfilePage = () => {
  return (
    <>
      <section className="backgroundProyecto flex justify-center items-center">
        <h1 className="text-white font-bold md:text-5xl text-2xl">Proyectos</h1>
      </section>

      <section className="flex flex-col justify-center items-center pb-5">
        <div className="divTextPerfil text-xl text-blue-950  p-10">
          <p className="text-justify">
            Bienvenidos a nuestra sección donde mostramos algunos de nuestros
            proyectos. Aquí presentamos algunos de nuestros casos de éxito más
            destacados. Como empresa de consultoría, nos enfocamos en ofrecer
            soluciones innovadoras y personalizadas para ayudar a nuestros
            clientes a alcanzar sus objetivos comerciales. Nuestro equipo
            altamente capacitado está comprometido en brindar resultados
            excepcionales y satisfacción al cliente.
          </p>
        </div>
        <ListValues />

        <ImageSlider />
      </section>
    </>
  );
};

export default ProfilePage;
