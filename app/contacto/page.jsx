import Form from "@/components/contacto/Form";
import "../../styles/Contacto.css";

const ContactPage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center img-container relative w-full">
        <h1 className="text-5xl text-white font-bold text-header">Contacto</h1>
        <div className="bg-black bg-opacity-25 w-full h-full absolute"></div>
      </div>

      <div className="flex flex-col justify-center items-start gap-5 w-[80%] my-10">
        <p>¡Gracias por visitar la página de Adwise Corporate Advisory!</p>
        <p>
          En Adwise Corporate Advisory estamos comprometidos con brindar un
          excelente servicio al cliente y una asesoría de primera calidad. Si
          tienes alguna pregunta, inquietud o comentario, no dudes en ponerte en
          contacto con nosotros.
        </p>
        <p>
          Para hacerlo, puedes completar el formulario de contacto que se
          encuentra en nuestra página web. Simplemente ingresa tu nombre,
          dirección de correo electrónico y un mensaje detallado, y uno de
          nuestros expertos en asesoramiento corporativo te responderá lo antes
          posible.
        </p>
        <p>
          También puedes comunicarte con nosotros a través de nuestros números
          telefónicos.
        </p>
        <p>San José, Costa Rica</p>
        <p>+506 61264151</p>
        <p>Ciudad de Panamá, Panamá</p>
        <p>+507 63062254</p>
        <p>Miami, FL. USA</p>
        <p>+1 786-220-3758</p>
        <p>
          Esperamos tener la oportunidad de trabajar contigo y ayudarte a
          alcanzar tus objetivos empresariales. ¡Contáctanos hoy mismo!
        </p>
      </div>

      <Form />
    </section>
  );
};

export default ContactPage;
