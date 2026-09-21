import { NextResponse } from 'next/server';
import { getTickets, createTicket, updateTicket, deleteTicket } from '@/lib/store';

export async function GET() {
  const tickets = getTickets();
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.customerName || !body.customerPhone || !body.deviceBrandModel || !body.issueDescription) {
      return NextResponse.json({ error: "Gerekli alanlar eksik" }, { status: 400 });
    }

    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const generatedTicketNo = body.ticketNumber || `BT-${new Date().getFullYear()}-${randomSuffix}`;

    const newTicket = createTicket({
      ticketNumber: generatedTicketNo,
      customerName: body.customerName,
      customerPhone: body.customerPhone,
      customerEmail: body.customerEmail || '',
      deviceType: body.deviceType || 'Dizüstü Bilgisayar',
      deviceBrandModel: body.deviceBrandModel,
      serialNumber: body.serialNumber || '',
      issueDescription: body.issueDescription,
      technicianNotes: body.technicianNotes || '',
      status: body.status || 'Kabul Edildi',
      estimatedCost: body.estimatedCost ? Number(body.estimatedCost) : 0,
      currency: body.currency || '₺',
    });

    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Servis kaydı oluşturulurken hata oluştu" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: "Kayıt ID'si eksik" }, { status: 400 });
    }
    const updated = updateTicket(body.id, body);
    if (!updated) {
      return NextResponse.json({ error: "Kayıt bulunamadı" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Güncelleme hatası" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: "ID parametresi gerekli" }, { status: 400 });
    }
    const success = deleteTicket(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Silme hatası" }, { status: 500 });
  }
}
