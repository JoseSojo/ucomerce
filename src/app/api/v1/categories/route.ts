import { NextRequest, NextResponse } from "next/server";
import { createCategory, filterCategories } from "../../../../infrastructure/models/categories.model";
import { CategoryCreateDto } from "../../../../domain/dto/legacy/categories.dto";

// GET - Obtener categorías
export const GET = async (req: NextRequest) => {
  try {
    const resultado = await filterCategories(); // Obtener lista de categorías
    return NextResponse.json({
      mensaje: "Lista de categorías obtenida exitosamente",
      data: resultado,
    });
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return NextResponse.json({ error: "Error al obtener categorías" }, { status: 500 });
  }
};

// POST - Crear una categoría
export const POST = async (req: NextRequest) => {
  try {
    const body: CategoryCreateDto = await req.json();

    if (!body.name) {
      return NextResponse.json({
        error: "Falta el nombre de la categoría",
      }, { status: 400 });
    }

    const nuevaCategoria = await createCategory(body); // Crear categoría
    return NextResponse.json({
      mensaje: "Categoría creada correctamente",
      data: nuevaCategoria,
    });
  } catch (error) {
    console.error("Error al crear categoría:", error);
    return NextResponse.json({ error: "Error al crear categoría" }, { status: 500 });
  }
};