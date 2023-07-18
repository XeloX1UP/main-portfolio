"use client";
import { DownArrowSvg } from "@/icons/svg/downArrow";
import { useState, useRef } from "react";

export default function WriteMe() {
  const [showWriteMe, setShowWriteMe] = useState(true);
  const writeMeRef = useRef<HTMLFormElement>(null);
  const handleClick = () => {
    const form = writeMeRef.current;
    alert("Mensaje enviado. Te responderé lo más pronto posible. Gracias.");
    form?.reset();
  };
  return (
    <form
      ref={writeMeRef}
      id="writeMe"
      className="px-10 transition-all duration-500  md:flex-1 py-5 md:py-0"
    >
      <div className="flex justify-center gap-5 items-center">
        <h2 className="text-2xl">Escríbeme</h2>
        <button
          type="button"
          className={`rounded-full border-2 border-slate-600 p-1 transition-all duration-500 hover:bg-slate-600 ${
            showWriteMe ? "rotate-180" : ""
          }`}
          onClick={() => setShowWriteMe(!showWriteMe)}
        >
          <i>
            <DownArrowSvg />
          </i>
        </button>
      </div>
      <div className={`${showWriteMe ? "block" : "hidden"} `}>
        <input
          type="text"
          className="w-full bg-transparent border-b-2 border-slate-900 text-white text-xl p-2 my-4"
          placeholder="Nombre completo"
        />
        <input
          type="text"
          className="w-full bg-transparent border-b-2 border-slate-900 text-white text-xl p-2 my-4"
          placeholder="Asunto"
        />
        <textarea
          cols={30}
          rows={10}
          className="resize-none w-full bg-transparent border-b-2 border-slate-900 text-white text-xl p-2 my-4"
          placeholder="Mensaje"
          maxLength={1000}
        ></textarea>
        <button
          type="button"
          className="border-black border-2 shadow-md shadow-black rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-amber-400 text-xl font-bold hover:from-slate-800 hover:to-slate-700 hover:text-lime-400 p-4  transition-all duration-500"
          onClick={() => {
            handleClick();
          }}
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}
