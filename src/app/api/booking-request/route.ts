import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      checkin,
      checkout,
      roomType,
      adults,
      children,
      remarks,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !checkin || !checkout) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hero@nissos.to",
      replyTo: email,
      subject: `Booking request — ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1b1b1b; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            Booking Request — ${lastName}
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name</strong></td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 4px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Check-in</strong></td>
              <td style="padding: 8px 0;">${checkin}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #666;"><strong>Check-out</strong></td>
              <td style="padding: 8px 4px;">${checkout}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Room type</strong></td>
              <td style="padding: 8px 0;">${roomType || "No preference"}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #666;"><strong>Adults</strong></td>
              <td style="padding: 8px 4px;">${adults}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Children</strong></td>
              <td style="padding: 8px 0;">${children || 0}</td>
            </tr>
            ${remarks ? `
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px 4px; color: #666; vertical-align: top;"><strong>Remarks</strong></td>
              <td style="padding: 8px 4px;">${remarks}</td>
            </tr>` : ""}
          </table>
          
          <p style="margin-top: 24px; color: #999; font-size: 12px;">
            Sent via heronissoshotel.gr booking request form
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
