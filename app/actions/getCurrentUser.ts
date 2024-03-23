import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from '@/libs/prismadb'


export async function getSession() {
    return await getServerSession(authOptions)
}

export async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email
            }
        });

        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,
            createdAt: new Date(currentUser.createdAt), // createdAt alanını Date türüne dönüştür
            updatedAt: new Date(currentUser.updateAt), // updatedAt alanını Date türüne dönüştür
            emailVerified: currentUser.emailVerified ? new Date(currentUser.emailVerified) : null // emailVerified alanını Date türüne dönüştür
        };
    } catch (error: any) {
        return null;
    }
}
