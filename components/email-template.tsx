import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <div>
    <h1>Hallo, {firstName}!</h1>
    <h1>Apa kabar?</h1>
  </div>
);
