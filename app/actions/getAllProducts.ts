import prisma from '@/libs/prismadb';

export default async function getAllProducts() {
    try {
        const products = await prisma.product.findMany({
            include: {
                reviews: {
                    include: {
                        user: true
                    }
                }
            }
        });
        
        return products;
    } catch (error: any) {
        throw new Error(error);
    }
}
