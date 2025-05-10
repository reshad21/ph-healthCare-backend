import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createAdmin = async (data:any) => {
    console.log(data);
    const userData = {

    }

    return {
        message: "admin created successfully",
    }
}

export const userService = {
    createAdmin
}