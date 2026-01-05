"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const inquiry = String(formData.get("inquiry") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (!name || !email || !notes) {
    return {
      status: "error",
      message: "Please fill in your name, email, and project notes.",
    };
  }

  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return {
      status: "error",
      message:
        "Email is not configured yet. Please try again later or contact me directly.",
    };
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeInquiry = escapeHtml(inquiry || "Not specified");
  const safeNotes = escapeHtml(notes);

  const html = `
    <div>
      <h2>New inquiry from ${safeName}</h2>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Inquiry:</strong> ${safeInquiry}</p>
      <p><strong>Notes:</strong></p>
      <p>${safeNotes.replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const text = [
    `New inquiry from ${name}`,
    `Email: ${email}`,
    `Inquiry: ${inquiry || "Not specified"}`,
    "",
    "Notes:",
    notes,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    return {
      status: "error",
      message: "Something went wrong while sending your message.",
    };
  }

  return {
    status: "success",
    message: "Thanks! Your message has been sent.",
  };
}
