import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email,firstName } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Cyber Physical System Laboratory <no-reply@cpsrg.org>",
      to: email,
      subject: "Welcome to Cyber Recruitment 2024 👋",
      react: EmailTemplate({ firstName: firstName }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
