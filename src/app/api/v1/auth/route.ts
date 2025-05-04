// src/app/api/v1/user/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/infrastructure/lib/prisma';
import { CreateUserDto } from '@/domain/user/types';

export async function POST(request: Request) {
  try {
    const userData: CreateUserDto = await request.json()
    
    // Validación
    if (!userData.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: userData
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}