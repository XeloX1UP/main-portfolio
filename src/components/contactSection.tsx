import RrSs from "./card/rrss";
import WriteMe from "./card/writeMe";

export default function ContactSection() {
  return (
    <section className="my-44 md:flex-1 w-full text-center">
      <div className="bg-gradient-to-bl from-slate-900 to-slate-950 border-black rounded-xl shadow-black shadow-lg py-4">
        <h1 className="text-5xl text-amber-400 font-bold mb-8">
          Quieres saber mas?
        </h1>
        <div className="md:flex md:justify-evenly">
          <RrSs />
          <WriteMe />
        </div>
      </div>
    </section>
  );
}
