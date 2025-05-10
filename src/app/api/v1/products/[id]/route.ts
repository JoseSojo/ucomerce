import { NextRequest, NextResponse } from "next/server";
import { deleteProduct, updateProduct } from "../../../../../infrastructure/models/products.model";
import { ProductUpdateDto } from "../../../../../domain/dto/legacy/products.dto";

// DELETE - Eliminar producto
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id?: string } }
) => {
  try {
    const id = params?.id ? parseInt(params.id, 10) : NaN;
    if (isNaN(id)) return NextResponse.json({ error: "ID inválido o requerido" }, { status: 400 });

    const productoEliminado = await deleteProduct(id);
    if (!productoEliminado) return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });

    return NextResponse.json({ mensaje: "Producto eliminado", data: productoEliminado });
  } catch (error: any) {
    console.error("Error al eliminar producto:", error.message);
    return NextResponse.json({ error: "Error interno al eliminar producto" }, { status: 500 });
  }
};

// PATCH - Actualizar producto
export const PATCH = async (req: NextRequest, { params }: { params: { id?: string } }) => {
    try {
     
      const id = params?.id;
  
      if (!id) {
        return NextResponse.json({ error: "ID inválido o requerido" }, { status: 400 });
      }
  
      const parsedId = parseInt(id, 10);
      if (isNaN(parsedId)) {
        return NextResponse.json({ error: "ID inválido, debe ser un número" }, { status: 400 });
      }
  
      const body: ProductUpdateDto = await req.json();
      const productoActualizado = await updateProduct(parsedId, body);
  
      if (!productoActualizado) {
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
      }
  
      return NextResponse.json({ mensaje: "Producto actualizado correctamente", data: productoActualizado });
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      return NextResponse.json({ error: "Error al actualizar producto." }, { status: 500 });
    }
  };