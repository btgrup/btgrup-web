import { NextResponse } from 'next/server';
import { getProducts, createProduct, updateProduct, deleteProduct } from '@/lib/store';

export async function GET() {
  const products = getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.category || body.price === undefined) {
      return NextResponse.json({ error: "Gerekli alanlar eksik" }, { status: 400 });
    }

    const newProduct = createProduct({
      name: body.name,
      category: body.category,
      badge: body.badge || '',
      price: Number(body.price),
      currency: body.currency || '₺',
      billingPeriod: body.billingPeriod || 'Tek Seferlik',
      description: body.description || '',
      features: Array.isArray(body.features) ? body.features : (body.features ? body.features.split('\n') : []),
      inStock: body.inStock !== false,
      featured: Boolean(body.featured)
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Ürün ekleme hatası" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: "Ürün ID'si eksik" }, { status: 400 });
    }

    if (body.price) body.price = Number(body.price);
    if (typeof body.features === 'string') {
      body.features = body.features.split('\n').map((f: string) => f.trim()).filter(Boolean);
    }

    const updated = updateProduct(body.id, body);
    if (!updated) {
      return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 });
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
      return NextResponse.json({ error: "ID belirtilmedi" }, { status: 400 });
    }
    const success = deleteProduct(id);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Silme hatası" }, { status: 500 });
  }
}
