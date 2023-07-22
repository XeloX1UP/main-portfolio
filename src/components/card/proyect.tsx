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
    <div className="w-full rounded-lg overflow-hidden sm:w-80 lg:w-96 transition-all duration-150 group bg-[var(--bg-300)]">
      <div className="bg-[var(--bg-200)] p-3">
        {href ? (
          <Link
            href={href}
            className="text-3xl text-center underline transition-all duration-150 text-[var(--text-200)] hover:text-[var(--accent-100)] font-extrabold italic"
            target="_blank"
          >
            {title}
          </Link>
        ) : (
          <h3 className="text-3xl text-center font-extrabold">{title}</h3>
        )}
      </div>
      <div className="w-full relative h-72">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover object-center"
        />{" "}
      </div>
      <div className="p-3 flex flex-row flex-wrap justify-between">
        <div className="w-1/3 ">
          <h4 className="text-end text-2xl text-[var(--primary-200)]">
            Descripción
          </h4>
        </div>
        <div className="w-1/2 ">
          <p className="text-start text-xl">{description}</p>
        </div>
      </div>
      <div className="p-3 flex flex-row flex-wrap justify-between">
        <div className="w-1/3 ">
          <h4 className="text-end text-2xl text-[var(--primary-200)]">
            Tecnologías usadas
          </h4>
        </div>
        <div className="w-1/2 flex flex-row flex-wrap  justify-start gap-2">
          {technologies
            .sort((a, b) => a.localeCompare(b))
            .map((technology) => (
              <p
                key={technology}
                className="text-[var(--text-200)] hover:text-[var(--accent-200)] hover:cursor-pointer transition-all duration-200 italic"
              >{`#${technology}`}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
