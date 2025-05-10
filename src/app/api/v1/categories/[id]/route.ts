import { NextRequest, NextResponse } from "next/server";
import { deleteCategory, updateCategory } from "../../../../../infrastructure/models/categories.model";
import { CategoryUpdateDto } from "../../../../../domain/dto/legacy/categories.dto";

// DELETE - Eliminar categoría
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

    const categoriaEliminada = await deleteCategory(parsedId);
    if (!categoriaEliminada) {
      return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 });
    }

    return NextResponse.json({ mensaje: "Categoría eliminada correctamente", data: categoriaEliminada });
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    return NextResponse.json({ error: "Error interno al eliminar categoría." }, { status: 500 });
  }
};

// PATCH - Actualizar categoría
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

    const body: CategoryUpdateDto = await req.json();
    const categoriaActualizada = await updateCategory(parsedId, body);

    if (!categoriaActualizada) {
      return NextResponse.json({ error: "Categoría no encontrada" }, { status: 404 });
    }

    return NextResponse.json({ mensaje: "Categoría actualizada correctamente", data: categoriaActualizada });
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    return NextResponse.json({ error: "Error interno al actualizar categoría." }, { status: 500 });
  }
};