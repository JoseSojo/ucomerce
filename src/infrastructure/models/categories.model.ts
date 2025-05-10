import { PrismaClient } from "@prisma/client";
import { CategoryCreateDto, CategoryUpdateDto, CategoryFilterDto } from "../../domain/dto/legacy/categories.dto";

const prisma = new PrismaClient();

// Crear categoría
export const createCategory = async (data: CategoryCreateDto) => {
  try {
    return await prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
  } catch (error) {
    console.error("Error al crear categoría:", error);
    throw new Error("Error al crear categoría.");
  }
};

// Actualizar categoría
export const updateCategory = async (id: number, data: CategoryUpdateDto) => {
  try {
    return await prisma.category.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    throw new Error("Error al actualizar categoría.");
  }
};

// Eliminar categoría
export const deleteCategory = async (id: number) => {
  try {
    return await prisma.category.delete({ where: { id } });
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    throw new Error("Error al eliminar categoría.");
  } finally {
    await prisma.$disconnect();
  }
};

// Filtrar categorías
export const filterCategories = async (filters?: CategoryFilterDto) => {
    try {
      return await prisma.category.findMany({
        where: {
          name: filters?.name,
          parentId: filters?.parentId,
        },
      });
    } catch (error) {
      console.error("Error al filtrar categorías:", error);
      throw new Error("Error al filtrar categorías.");
    }
  };