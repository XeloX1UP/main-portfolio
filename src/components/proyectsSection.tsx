import {
  tipsImages,
  storeImages,
  secondLandingImages,
  rifasImages,
} from "@/importImgs";
import Proyect from "./card/proyect";
import { ProyectProps } from "@/types";
const proyects: ProyectProps[] = [
  {
    title: "Centro de rifas",
    description:
      "Red social para la venta de rifas, con interaccion directa entre vendedores y compradores.",
    images: Object.values(rifasImages),
    technologies: [
      "NextJS",
      "Firebase",
      "TailwindCSS",
      "TypeScript",
      "ReactJS",
      "NodeJS",
      "HTML",
      "CSS",
    ],
    href: "https://rifas-x1up-xelox1up.vercel.app/",
  },
  {
    title: "App pago de propinas",
    description:
      "Aplicación web para el calculo de propinas utilizado por garzones.",
    images: Object.values(tipsImages),
    technologies: ["HTML", "CSS", "JavaScript", "Express", "MongoDB", "HBS"],
  },
  {
    title: "Web Store",
    description:
      "Tienda online de productos de tecnología, con carrito de compras y pagos.",
    images: Object.values(storeImages),
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "NextJS",
      "MongoDB",
      "Bootstrap",
    ],
  },
  {
    title: "Landing page",
    description:
      "Landing page de un restaurante, con animaciones y efectos de scroll.",
    images: Object.values(secondLandingImages),
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"],
  },
];

export default function ProyectSection() {
  return (
    <section className="mt-56 text-center">
      <h1 className="text-5xl font-bold">Proyectos</h1>
      <div className="flex flex-row flex-wrap justify-evenly gap-12 mt-24">
        {proyects.map((proyect) => (
          <Proyect {...proyect} key={proyect.title} />
        ))}
      </div>
    </section>
  );
}
