import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import { cookies } from 'next/headers'

export async function POST(NextRequest) {
    const reqBody = await NextRequest.json();

    const { name, email, password } = reqBody;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (user) {
            cookies.set('loggedIn', true);
            return NextResponse.json({
                message: "User Logged in successfully",
            })

        }
        else {
            return NextResponse.json({
                message: "User not found",
            })
        }

    } catch (error) {
        console.log(error);
    }
}