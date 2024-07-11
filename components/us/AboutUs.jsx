const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="text-center py-10">
        <h1 className="text-blue-950 md:text-7xl text-3xl ">Nosotros</h1>
      </div>
      <div className="divContainer text-blue">
        <div className="divPhoto">
          <img src="assets/Images/Max Photo.png" alt="Imagen de Max" />
        </div>
        <div className="divContaienrText text-blue-950">
          <h2 className="font-bold text-4xl">CEO</h2>
          <p className="mt-3">
            Max Santamaría Gutiérrez es el CEO y Senior Partner de ADWISE
            Corporate Advisory para Latinoamérica, con más de 20 años de
            experiencia en el mercado, es psicólogo graduado de la Universidad
            de Costa Rica y ha obtenido especializaciones en Negociación,
            Entrenamiento en Educación para el Desarrollo Humano y Asesoramiento
            Internacional en Psicología de los Procesos Grupales.
          </p>
          <p className="mt-3">
            Ha desarrollado investigaciones en áreas como Artificial
            Intelligence, Human Resources Scorecard, Desarrollo Corporativo,
            Transformación Digital, Leadership Awareness, Inteligencia
            Emocional, Sistemas de Gestión para la Productividad y Programación
            Neurolingüística en las organizaciones.
          </p>
          <p className="mt-3">
            Ha trabajado como consultor en América Latina para empresas de
            diferentes rubros y clústeres de negocio, incluyendo consumo masivo,
            petróleo, empaque, agroindustria, servicios, banca, tecnología,
            construcción, manufactura, exportación, seguridad, trading, ONG´s,
            desarrollo inmobiliario y muchas otras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
