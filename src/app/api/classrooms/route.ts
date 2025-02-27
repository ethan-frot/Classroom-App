import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {

  const classrooms = await prisma.classroom.findMany();

  return NextResponse.json(classrooms, { status: 200 });
}

export async function POST(req: NextRequest) {

  // Récupérer le body de la requête
  const body = await req.json();

  // create a new classroom with Prisma
  const classroom = await prisma.classroom.create({
    data: {
      classroomName: body.classroomName,
      description: body.description,
    },
  });

  // return response
  return NextResponse.json(classroom, { status: 201 });
}
