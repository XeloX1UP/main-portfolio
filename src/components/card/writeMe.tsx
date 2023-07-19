"use client";
import { DownArrowSvg } from "@/icons/svg/downArrow";
import { validateWriteMe } from "@/validations/validateForms";
import { useState, useRef } from "react";

export default function WriteMe() {
  const [showWriteMe, setShowWriteMe] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const writeMeRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sendEmail = () => {};
  const handleClick = () => {
    if (!isValidForm) return;
    const form = writeMeRef.current;
    sendEmail();
    alert(
      `Mensaje enviado. Te responderé lo más pronto posible al correo ${formData.email}. Gracias ${formData.name}.`
    );
    form?.reset();
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsValidForm(false);
  };
  const handleBlur = () => {
    const errors = validateWriteMe(formData);
    if (!errors.hasErrors) {
      setIsValidForm(true);
      setErrors({ name: "", email: "", subject: "", message: "" });
      return;
    } else {
      setErrors({
        name: errors.name,
        email: errors.email,
        subject: errors.subject,
        message: errors.message,
      });
    }
    setIsValidForm(false);
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
          className={`w-full bg-transparent ${
            errors.name != ""
              ? "border-2 border-red-600 rounded-md"
              : "border-b-2 border-slate-900"
          } text-white text-xl p-2 my-4`}
          placeholder="Nombre completo"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        />
        <p className="text-red-600 text-sm">{errors.name}</p>
        <input
          type="email"
          className={`w-full bg-transparent ${
            errors.email != ""
              ? "border-2 border-red-600 rounded-md"
              : "border-b-2 border-slate-900"
          } text-white text-xl p-2 my-4`}
          placeholder="Correo electrónico"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        />
        <p className="text-red-600 text-sm">{errors.email}</p>
        <input
          type="text"
          className={`w-full bg-transparent ${
            errors.subject != ""
              ? "border-2 border-red-600 rounded-md"
              : "border-b-2 border-slate-900"
          } text-white text-xl p-2 my-4`}
          placeholder="Asunto"
          onChange={(e) => {
            setFormData({ ...formData, subject: e.target.value });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        />
        <p className="text-red-600 text-sm">{errors.subject}</p>
        <textarea
          cols={30}
          rows={10}
          className={`resize-none w-full bg-transparent ${
            errors.message != ""
              ? "border-2 border-red-600 rounded-md"
              : "border-b-2 border-slate-900"
          } text-white text-xl p-2 my-4`}
          placeholder="Mensaje"
          maxLength={1000}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        ></textarea>
        <p className="text-red-600 text-sm">{errors.message}</p>
        <button
          disabled={!isValidForm}
          type="button"
          className={`border-black border-2 shadow-md shadow-black rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-amber-400 text-xl font-bold hover:from-slate-800 hover:to-slate-700 hover:text-lime-400 p-4  transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed disabled:bg-slate-400 my-7`}
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
