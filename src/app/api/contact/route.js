import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    const { lastName, email, message } = data;
    if (!lastName || !email || !message) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    // Send email via mailto link fallback — in production, integrate Nodemailer or similar
    // For now, forward to a simple email notification
    const nodemailer = await import("nodemailer").catch(() => null);

    if (nodemailer) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || "website@rs-randack.de",
        to: process.env.CONTACT_EMAIL || "kontakt@rs-randack.de",
        replyTo: email,
        subject: `Kontaktanfrage von ${data.salutation || ""} ${data.firstName || ""} ${lastName}`.trim(),
        text: [
          `Firma: ${data.company || "-"}`,
          `Anrede: ${data.salutation || "-"}`,
          `Name: ${data.firstName || ""} ${lastName}`,
          `Telefon: ${data.phone || "-"}`,
          `E-Mail: ${email}`,
          "",
          "Nachricht:",
          message,
        ].join("\n"),
      });
    } else {
      // Nodemailer not available — log the submission
      console.log("Contact form submission:", JSON.stringify(data));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Server-Fehler" },
      { status: 500 }
    );
  }
}
