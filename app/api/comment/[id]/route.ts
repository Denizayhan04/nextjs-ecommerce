
import { getCurrentUser } from '@/app/actions/getCurrentUser';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {


    try {
        
        // Yeni bir yorum eklemek için prisma.review.create fonksiyonunu kullanın
        const newReview = await prisma.review.findMany({
            where:{
                productId:params.id
            }
        })

        return NextResponse.json(newReview);



    } catch (error) {
        console.error('Yorum eklenirken bir hata oluştu:', error);
        return NextResponse.error();
    }
}
