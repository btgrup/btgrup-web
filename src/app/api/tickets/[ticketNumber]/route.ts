import { NextResponse } from 'next/server';
import { getTicketByNumber } from '@/lib/store';

export async function GET(
  request: Request,
  { params }: { params: { ticketNumber: string } }
) {
  const { ticketNumber } = params;
  if (!ticketNumber) {
    return NextResponse.json({ error: "Takip numarası belirtilmedi" }, { status: 400 });
  }

  const ticket = getTicketByNumber(ticketNumber);
  if (!ticket) {
    return NextResponse.json({ error: "Bu takip numarasına ait servis kaydı bulunamadı" }, { status: 404 });
  }

  return NextResponse.json(ticket);
}
