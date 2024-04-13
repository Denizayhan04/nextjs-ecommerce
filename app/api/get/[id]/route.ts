import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";



export async function GET(
   request: Request, {params} : {params: {id : string}}
) {

    const product = await prisma.product.findUnique({
        where: {
            id: params.id
        }
    })
    return NextResponse.json(product)
}