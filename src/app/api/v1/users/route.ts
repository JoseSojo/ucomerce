import { NextRequest, NextResponse } from "next/server";
import { createUser, filterUsers } from "../../../../infrastructure/models/users.model";
import { UserCreateDto } from "../../../../domain/dto/legacy/users.dto";

// GET - Obtener usuarios
export const GET = async (req: NextRequest) => {
  try {
    const resultado = await filterUsers(); // Obtener lista de usuarios
    return NextResponse.json({
      mensaje: "Lista de usuarios obtenida exitosamente",
      data: resultado,
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ error: "Error al obtener usuarios" }, { status: 500 });
  }
};

// POST - Crear un usuario
export const POST = async (req: NextRequest) => {
  try {
    const body: UserCreateDto = await req.json();

    if (!body.email) {
      return NextResponse.json({
        error: "Falta el email del usuario",
      }, { status: 400 });
    }

    const nuevoUsuario = await createUser(body); // Crear usuario
    return NextResponse.json({
      mensaje: "Usuario creado correctamente",
      data: nuevoUsuario,
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 });
  }
};