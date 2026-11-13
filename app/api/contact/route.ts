import { NextResponse } from 'next/server';
import { sql, hasDb } from '@/lib/db';
import { clean, asText, whatsappLink, notifyOwner } from '@/lib/notify';

export async function POST(req: Request) {
  let wa = '';
  try {
    const body = await req.json();
    const name = clean(body.name, 100);
    const phone = clean(body.phone, 50);
    const message = clean(body.message, 1000);

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Name and phone are required.' }, { status: 400 });
    }

    const fields = [
      { label: 'Name', value: name },
      { label: 'Phone', value: phone },
      { label: 'Message', value: message || 'No message provided' }
    ];

    const subject = `New Contact from ${name} - Shawarma Kareem`;
    wa = whatsappLink(asText(subject, fields));

    if (!hasDb) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Online contact is temporarily unavailable. Please reach out via WhatsApp.', 
        whatsapp: wa 
      }, { status: 503 });
    }

    await sql`
      insert into contact_messages (name, phone, message)
      values (${name}, ${phone}, ${message})
    `;

    await notifyOwner(subject, fields);

    return NextResponse.json({ ok: true, whatsapp: wa });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      ok: false, 
      error: 'Something went wrong. Please try again or contact us on WhatsApp.', 
      whatsapp: wa 
    }, { status: 500 });
  }
}
