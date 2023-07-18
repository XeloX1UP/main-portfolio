import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProyectProps = {
  title: string;
  images: StaticImport[];
  description: string;
  technologies: string[];
  href?: string;
};
