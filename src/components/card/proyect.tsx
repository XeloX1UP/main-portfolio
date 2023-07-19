import { ProyectProps } from "@/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function Proyect({
  title,
  description,
  images,
  technologies,
  href,
}: ProyectProps) {
  return (
    <div className="bg-gradient-to-bl from-slate-900 to-slate-950 w-full border-2 border-black rounded-xl shadow-black shadow-lg overflow-hidden sm:w-80 lg:w-96 transition-all duration-150">
      <div className="text-white p-3">
        {href ? (
          <Link
            href={href}
            className="text-3xl text-center underline text-lime-400 hover:text-amber-300 font-extrabold"
            target="_blank"
          >
            {title}
          </Link>
        ) : (
          <h3 className="text-3xl text-center underline text-amber-400 font-extrabold">
            {title}
          </h3>
        )}
      </div>
      <div className="w-full relative h-72 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover object-center"
        />{" "}
      </div>
      <div className="p-3 flex flex-row flex-wrap justify-between text-white">
        <div className="w-1/3 ">
          <h4 className="text-end text-2xl text-amber-400">Descripción</h4>
        </div>
        <div className="w-1/2 ">
          <p className="text-start text-xl">{description}</p>
        </div>
      </div>
      <div className="p-3 flex flex-row flex-wrap justify-between text-white">
        <div className="w-1/3 ">
          <h4 className="text-end text-2xl text-amber-400">
            Tecnologías usadas
          </h4>
        </div>
        <div className="w-1/2 flex flex-row flex-wrap  justify-start gap-2">
          {technologies
            .sort((a, b) => a.localeCompare(b))
            .map((technology) => (
              <p
                key={technology}
                className="text-slate-400 hover:text-slate-50 hover:cursor-pointer transition-all duration-200"
              >{`#${technology}`}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
