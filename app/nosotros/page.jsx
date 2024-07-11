import Image from "next/image";
import "../../styles/nosotros.css";
import Responsability from "@/components/us/Responsability";
import Vision from "@/components/us/Vision";
import Mision from "@/components/us/Mision";
import Information from "@/components/us/Information";
import AboutUs from "@/components/us/AboutUs";
import Values from "@/components/us/Values";

const UsPage = () => {
  return (
    <>
      <AboutUs />
      <Information />
      <Mision />
      <Vision />
      <Values />
      <Responsability />
    </>
  );
};

export default UsPage;
