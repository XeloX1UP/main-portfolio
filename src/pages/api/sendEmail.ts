import { sendEmailSendGrid } from "@/sendEmail";
import { WriteEmailProps } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Metodo no permitido" });
  }
  try {
    const data: WriteEmailProps = JSON.parse(req.body);

    const result = await sendEmailSendGrid(data);
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(403).json({ message: "No permitido", error });
  }
}
