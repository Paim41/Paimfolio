import { NextResponse } from "next/server"
import { Resend } from "resend"
import { createAdminClient } from "@/lib/supabase-admin"

export const dynamic = "force-dynamic"

const contactEmail = process.env.CONTACT_EMAIL || "sakacomel@gmail.com"

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { type } = body
    const supabase = createAdminClient()
    const resend = getResend()

    if (type === "inquiry") {
      const { name, email, service, description, startDate, budget } = body

      await supabase.from("inquiries").insert({
        name,
        email,
        service,
        description,
        start_date: startDate,
        budget,
        status: "pending",
      })

      if (resend) {
        await resend.emails.send({
          from: "Paim <onboarding@resend.dev>",
          to: contactEmail,
          subject: `New booking inquiry: ${service} from ${name}`,
          html: `
            <h2>New Booking Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Start date:</strong> ${startDate}</p>
            <p><strong>Budget:</strong> ${budget}</p>
          `,
        })
      }

      return NextResponse.json({ success: true })
    }

    if (type === "contact") {
      const { name, email, message } = body

      await supabase.from("messages").insert({
        name,
        email,
        message,
        read: false,
      })

      if (resend) {
        await resend.emails.send({
          from: "Paim <onboarding@resend.dev>",
          to: contactEmail,
          subject: `New contact message from ${name}`,
          html: `
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        })
      }

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
