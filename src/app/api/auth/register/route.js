import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function POST(NextRequest) {
    const reqBody = await NextRequest.json();

    const { name, email, password } = reqBody;

    try {
        const user = await prisma.user.create({
            data: {
                name, email, password
            }
        })

        return NextResponse.json({
            "message": "User created successfully",
        });
    } catch (error) {
        console.log(error);
    }
}