import { NextResponse } from 'next/server';
import { sql, hasDb } from '@/lib/db';

export async function PATCH(req: Request) {
  if (!hasDb) {
    return NextResponse.json({ ok: false, error: 'Database not connected' }, { status: 503 });
  }

  try {
    const { id, status } = await req.json();
    
    if (!id || !['new', 'done', 'cancelled'].includes(status)) {
      return NextResponse.json({ ok: false, error: 'Invalid data' }, { status: 400 });
    }

    await sql`
      update contact_messages 
      set status = ${status} 
      where id = ${id}
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Admin Contact API Error:', error);
    return NextResponse.json({ ok: false, error: 'Database error' }, { status: 500 });
  }
}
