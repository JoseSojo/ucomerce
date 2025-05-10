import { NextRequest, NextResponse } from "next/server";
import { createProduct, filterProducts } from "../../../../infrastructure/models/products.model";
import { ProductCreateDto } from "../../../../domain/dto/legacy/products.dto";

// GET - Obtener productos
export const GET = async (req: NextRequest) => {
  try {
    const resultado = await filterProducts(); 
    return NextResponse.json({
      mensaje: "Lista de productos obtenida exitosamente",
      data: resultado,
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 });
  }
};

// POST - Crear un producto
export const POST = async (req: NextRequest) => {
  try {
    const body: ProductCreateDto = await req.json();

    if (!body.name || !body.price || !body.sku) {
      return NextResponse.json({
        error: "Faltan datos obligatorios (name, price, sku)",
      }, { status: 400 });
    }

    const nuevoProducto = await createProduct(body); 
    return NextResponse.json({
      mensaje: "Producto creado correctamente",
      data: nuevoProducto,
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    return NextResponse.json({ error: "Error al crear producto" }, { status: 500 });
  }
};