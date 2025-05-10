import { NextRequest, NextResponse } from "next/server";
import { deleteUser, updateUser } from "../../../../../infrastructure/models/users.model";
import { UserUpdateDto } from "../../../../../domain/dto/legacy/users.dto";

// DELETE - Eliminar usuario
export const DELETE = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID inválido o requerido" }, { status: 400 });
    }

    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      return NextResponse.json({ error: "ID inválido, debe ser un número" }, { status: 400 });
    }

    const usuarioEliminado = await deleteUser(parsedId);
    if (!usuarioEliminado) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ mensaje: "Usuario eliminado correctamente", data: usuarioEliminado });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json({ error: "Error interno al eliminar usuario." }, { status: 500 });
  }
};

// PATCH - Actualizar usuario
export const PATCH = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID inválido o requerido" }, { status: 400 });
    }

    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      return NextResponse.json({ error: "ID inválido, debe ser un número" }, { status: 400 });
    }

    const body: UserUpdateDto = await req.json();
    const usuarioActualizado = await updateUser(parsedId, body);

    if (!usuarioActualizado) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json({ mensaje: "Usuario actualizado correctamente", data: usuarioActualizado });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json({ error: "Error interno al actualizar usuario." }, { status: 500 });
  }
};