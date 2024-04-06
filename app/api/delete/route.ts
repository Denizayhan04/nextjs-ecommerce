import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';


export async function DELETE(request:any,res:any) {
    const body = await request.json();
    console.log(body)
    const id = body;
  try {
    const data = await prisma.product.delete({
        where:{
            id:id
        }
    })
    return NextResponse.json(data)

  } catch (error) {
    console.error("Ürünler alınırken hata oluştu:", error);
    res.status(500).json({ error: 'Sunucu Hatası' }); // Sunucu hatası durumunda uygun hata mesajını istemciye gönder
  }

/*   const deleteUsers = await prisma.user.deleteMany({
    where: {
      email: {
        contains: 'prisma.io',
      },
    },
  }) */

}
