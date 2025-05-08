import { PrismaClient } from "@prisma/client";
import { CreditCreateDto, CreditUpdateDto, CreditFilterDto } from "../../domain/dto/credit.dto";

const prisma = new PrismaClient();

// Crear crédito
export const createCredit = async (data: CreditCreateDto) => {
  try {
    const userId = Number(data.userId);
    if (isNaN(userId)) throw new Error("ID de usuario inválido, debe ser un número.");

    return await prisma.credit.create({
      data: {
        available: data.available,
        limit: data.limit,
        user: { connect: { id: userId } },
      },
    });
  } catch (error) {
    console.error("Error al crear crédito:", error);
    throw new Error("Error al crear crédito.");
  }
};

// Actualizar crédito
export const updateCredit = async (id: number, data: CreditUpdateDto) => {
  try {
    // Convertir valores a número si Prisma los requiere
    const formattedData = {
      userId: data.userId ? parseInt(data.userId.toString(), 10) : undefined,
      limit: data.limit ? Number(data.limit) : undefined,
      available: data.available ? Number(data.available) : undefined,
    };

    return await prisma.credit.update({
      where: { id },
      data: formattedData,
    });
  } catch (error) {
    console.error("Error al actualizar crédito:", error);
    throw new Error("Error al actualizar crédito.");
  }
};


// Eliminar crédito
export const deleteCredit = async (id: number) => {
  try {
    return await prisma.credit.delete({ where: { id } });
  } catch (error) {
    console.error("Error al eliminar crédito:", error);
    throw new Error("Error al eliminar crédito.");
  } finally {
    await prisma.$disconnect();
  }
};

// Filtrar créditos
export const filterCredits = async (filters?: CreditFilterDto) => {
  try {
    return await prisma.credit.findMany({
      where: {
        userId: filters?.userId,
        limit: filters?.limit ? { gte: filters.limit.gte, lte: filters.limit.lte } : undefined,
        available: filters?.available ? { gte: filters.available.gte, lte: filters.available.lte } : undefined,
        updatedAt: filters?.updatedAt ? { gte: filters.updatedAt.gte, lte: filters.updatedAt.lte } : undefined,
      },
    });
  } catch (error) {
    console.error("Error al filtrar créditos:", error);
    throw new Error("Error al filtrar créditos.");
  }
};
