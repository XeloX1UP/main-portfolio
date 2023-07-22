import { SENDGRID_API_KEY } from "./consts";
interface Options {
  method: string;
  headers: {
    "content-type": string;
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
  body: string;
}
export const sendEmailSendGrid = async ({
  subject,
  email,
  name,
  message,
}: {
  subject: string;
  email: string;
  name: string;
  message: string;
}) => {
  const url = "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send";
  const options: Options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": SENDGRID_API_KEY,
      "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "monk.da15@gmail.com",
            },
          ],
          subject: subject,
        },
      ],
      from: {
        email: email,
      },
      content: [
        {
          type: "text/plain",
          value: `${name} te ha enviado un mensaje desde tu página web. \n\n${message}`,
        },
      ],
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    return `${error}`;
  }
};
