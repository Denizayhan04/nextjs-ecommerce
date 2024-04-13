import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser == null) {
        return NextResponse.error();
    }

    try {
        const body = await request.json();
        const { userId, productId, rating, comment } = body;

        // currentUser.name değerini kontrol edin ve null değilse kullanın
        const userName = currentUser.name !== null ? currentUser.name : '';

        // Yeni bir yorum eklemek için prisma.review.create fonksiyonunu kullanın
        const newReview = await prisma.review.create({
            data: {
                userId,
                productId,
                rating,
                comment,
                userName: userName // null değilse kullanın
            }
        });

        await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                reviews: {
                    push: newReview.id
                }
            }
        });

        await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                reviews:{
                    push:newReview.id
                }
            }
        })

        // Yeni yorum eklendikten sonra ilgili ürünün review dizisine ekleyin

        // Yeni yorumu döndürün
        return NextResponse.json({ newReview, body });
    } catch (error) {
        console.error('Yorum eklenirken bir hata oluştu:', error);
        return NextResponse.error();
    }
}
