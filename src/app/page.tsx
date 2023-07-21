import BiographySection from "@/components/biographySection";
import ContactSection from "@/components/contactSection";
import HistorySection from "@/components/historySection";
import ProyectSection from "@/components/proyectsSection";
import TecnologiesSection from "@/components/tecnologiesSection";

export default function Home() {
  return (
    <div className="">
      <BiographySection />
      <TecnologiesSection />
      <ProyectSection />
      <HistorySection />
      <ContactSection />
    </div>
  );
}
