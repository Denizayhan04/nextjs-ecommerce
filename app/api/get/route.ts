import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';


export async function GET(req: any, res: any) {
  try {
    const data = await prisma.product.findMany(); // Ürünleri Prisma aracılığıyla alın
    return NextResponse.json(data) 

  } catch (error) {
    console.error("Ürünler alınırken hata oluştu:", error);
    res.status(500).json({ error: 'Sunucu Hatası' }); // Sunucu hatası durumunda uygun hata mesajını istemciye gönder
  }

}
