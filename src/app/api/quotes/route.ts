import { NextResponse } from 'next/server';
import { getQuotes, createQuote, updateQuoteStatus, deleteQuote } from '@/lib/store';
import { sendQuoteNotification } from '@/lib/mail';

export async function GET() {
  const quotes = getQuotes();
  return NextResponse.json(quotes);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const details = body.details || body.notes;
    if (!body.fullName || !body.phone || !body.category || !details) {
      return NextResponse.json({ error: "Lütfen gerekli alanları doldurun" }, { status: 400 });
    }

    const newQuote = createQuote({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email || '',
      companyName: body.companyName || '',
      category: body.category,
      details: details
    });

    // safa@btgrup.com adresine e-posta bildirimi gönder
    try {
      await sendQuoteNotification({
        fullName: newQuote.fullName,
        phone: newQuote.phone,
        email: newQuote.email,
        companyName: newQuote.companyName,
        category: newQuote.category,
        details: newQuote.details,
        createdAt: newQuote.createdAt,
      });
    } catch (mailErr) {
      console.error('[API Quotes] Mail bildirimi gönderilirken hata oluştu:', mailErr);
    }

    return NextResponse.json(newQuote, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Talep gönderilirken bir hata oluştu" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body.id || !body.status) {
      return NextResponse.json({ error: "ID ve Durum alanları zorunludur" }, { status: 400 });
    }
    const updated = updateQuoteStatus(body.id, body.status);
    if (!updated) {
      return NextResponse.json({ error: "Talep bulunamadı" }, { status: 404 });
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
      return NextResponse.json({ error: "ID parametresi eksik" }, { status: 400 });
    }
    const success = deleteQuote(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Silme hatası" }, { status: 500 });
  }
}
