"use client";
import { SENDGRID_API_KEY } from "@/consts";
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

  const handleClick = async () => {
    if (!isValidForm) return;
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.subject == "" ||
      formData.message == ""
    )
      return;
    const form = writeMeRef.current;
    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((res) => res.json());

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
          className={`rounded-full p-1 transition-all duration-500 hover:bg-[var(--bg-200)] ${
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
              ? "border-2 border-[var(--primary-100)] rounded-md"
              : "border-b-2 border-[var(--bg-300)]"
          } text-white text-xl p-2 my-4 placeholder:text-[var(--bg-300)]]`}
          placeholder="Nombre completo"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value.trim() });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        />
        <p className="text-[var(--accent-200)] text-sm translate-y-[-10px]">
          {errors.name}
        </p>
        <input
          type="email"
          className={`w-full bg-transparent ${
            errors.email != ""
              ? "border-2 border-[var(--primary-100)] rounded-md"
              : "border-b-2 border-[var(--bg-300)]"
          } text-white text-xl p-2 my-4`}
          placeholder="Correo electrónico"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value.trim() });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        />
        <p className="text-[var(--accent-200)] text-sm translate-y-[-10px]">
          {errors.email}
        </p>
        <input
          type="text"
          className={`w-full bg-transparent ${
            errors.subject != ""
              ? "border-2 border-[var(--primary-100)] rounded-md"
              : "border-b-2 border-[var(--bg-300)]"
          } text-white text-xl p-2 my-4`}
          placeholder="Asunto"
          onChange={(e) => {
            setFormData({ ...formData, subject: e.target.value.trim() });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        />
        <p className="text-[var(--accent-200)] text-sm translate-y-[-10px]">
          {errors.subject}
        </p>
        <textarea
          cols={30}
          rows={10}
          className={`resize-none w-full bg-transparent ${
            errors.message != ""
              ? "border-2 border-[var(--primary-100)] rounded-md"
              : "border-b-2 border-[var(--bg-300)]"
          } text-white text-xl p-2 my-4`}
          placeholder="Mensaje"
          maxLength={1000}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value.trim() });
          }}
          onBlur={(e) => {
            handleBlur();
          }}
        ></textarea>
        <p className="text-[var(--accent-200)] text-sm translate-y-[-10px]">
          {errors.message}
        </p>
        <button
          disabled={!isValidForm}
          type="button"
          className={`rounded-md bg-[var(--bg-300)] font-bold hover:bg-[var(--bg-200)] hover:text-[var(--accent-200)] p-4  transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed`}
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
