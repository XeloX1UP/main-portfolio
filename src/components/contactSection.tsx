import RrSs from "./card/rrss";
import WriteMe from "./card/writeMe";

export default function ContactSection() {
  return (
    <section className="my-56 md:flex-1 w-full text-center">
      <div className="">
        <h1 className="text-5xl font-bold mb-28">¿Quieres saber mas?</h1>
        <div className="md:flex md:justify-evenly">
          <RrSs />
          <WriteMe />
        </div>
      </div>
    </section>
  );
}
