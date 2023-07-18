import BiographySection from "@/components/biographySection";
import ContactSection from "@/components/contactSection";
import ProyectSection from "@/components/proyectsSection";
import TecnologiesSection from "@/components/tecnologiesSection";

export default function Home() {
  return (
    <div className="">
      <BiographySection />
      <TecnologiesSection />
      <ProyectSection />
      <ContactSection />
    </div>
  );
}
