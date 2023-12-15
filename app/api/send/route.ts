import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Cyber Physical System <no-reply@cpsrg.org>",
      to: email,
      subject: "Welcome to Cyber Physical System Open Recruitment 2024 👋",
      react: EmailTemplate({ firstName: "UwU" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
