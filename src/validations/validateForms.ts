export const validateWriteMe = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const errors = {
    name: "",
    email: "",
    subject: "",
    message: "",
    hasErrors: false,
  };
  if (!name) {
    errors.name = "El nombre es obligatorio";
    errors.hasErrors = true;
  }
  if (!email) {
    errors.email = "El email es obligatorio";
    errors.hasErrors = true;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "El email es incorrecto";
    errors.hasErrors = true;
  }
  if (!subject) {
    errors.subject = "El asunto es obligatorio";
    errors.hasErrors = true;
  }
  if (!message) {
    errors.message = "El mensaje es obligatorio";
    errors.hasErrors = true;
  }
  return errors;
};
