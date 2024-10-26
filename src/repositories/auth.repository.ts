import { LoginDto } from "../dto/login.dto";
import { registerDto } from "../dto/register.dto";
import { prisma } from "../libs/prisma";

export async function findUserByEmailOrUsername(UsernameOrEmail: string) {
    return prisma.user.findFirst({
        where: {
            OR: [
                { email: UsernameOrEmail },
                { profile: { username: UsernameOrEmail } }
            ]
        }
    })
}

export async function createUser(data: registerDto) {
    return prisma.user.create({
        data: {
            email: data.email,
            password: data.password,
            profile: {
                create: {
                    username: data.username!
                }
            }
        }
    })
}

export async function findUser(data: LoginDto) {
    return prisma.user.findUnique({
        where: {
            email: data.username,
            password: data.password
        },
        select: {
            id: true,
            email: true,
            profile: {
                select: {
                    id: true,
                    username: true,
                    address: true,
                    gender: true,
                    phone: true
                }
            }
        }
    })
}