import { PrismaClient } from "@prisma/client";
import { ProductCreateDto, ProductUpdateDto, ProductFilterDto } from "../../domain/dto/legacy/products.dto";

const prisma = new PrismaClient();

// Crear producto
export const createProduct = async (data: ProductCreateDto) => {
  try {
    return await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: Number(data.price),
        sku: data.sku,
        categoryId: data.categoryId,
        stock: data.stock ?? 0,
        imageUrl: data.imageUrl,
        active: data.active ?? true,
      },
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw new Error("Error al crear producto.");
  }
};

// Actualizar producto
export const updateProduct = async (id: number, data: ProductUpdateDto) => {
  try {
    const formattedData = {
      name: data.name,
      description: data.description,
      price: data.price ? Number(data.price) : undefined,
      sku: data.sku,
      categoryId: data.categoryId,
      stock: data.stock,
      imageUrl: data.imageUrl,
      active: data.active,
    };

    return await prisma.product.update({
      where: { id },
      data: formattedData,
    });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw new Error("Error al actualizar producto.");
  }
};

// Eliminar producto
export const deleteProduct = async (id: number) => {
  try {
    return await prisma.product.delete({ where: { id } });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    throw new Error("Error al eliminar producto.");
  } finally {
    await prisma.$disconnect();
  }
};

// Filtrar productos
export const filterProducts = async (filters?: ProductFilterDto) => {
  try {
    return await prisma.product.findMany({
      where: {
        name: filters?.name,
        categoryId: filters?.categoryId,
        price: filters?.price ? { gte: filters.price.gte, lte: filters.price.lte } : undefined,
        stock: filters?.stock ? { gte: filters.stock.gte, lte: filters.stock.lte } : undefined,
        active: filters?.active,
        createdAt: filters?.createdAt ? { gte: filters.createdAt.gte, lte: filters.createdAt.lte } : undefined,
      },
    });
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw new Error("Error al filtrar productos.");
  }
};