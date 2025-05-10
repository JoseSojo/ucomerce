import { PrismaClient } from "@prisma/client";
import { UserCreateDto, UserUpdateDto, UserFilterDto } from "../../domain/dto/legacy/users.dto";

const prisma = new PrismaClient();

// Crear usuario
export const createUser = async (data: UserCreateDto) => {
  try {
    return await prisma.user.create({
      data: {
        email: data.email,
        role: data.role ?? "cliente", // Valor por defecto según el modelo
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        company: data.company,
        rfc: data.rfc,
      },
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw new Error("Error al crear usuario.");
  }
};

// Actualizar usuario
export const updateUser = async (id: number, data: UserUpdateDto) => {
  try {
    return await prisma.user.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw new Error("Error al actualizar usuario.");
  }
};

// Eliminar usuario
export const deleteUser = async (id: number) => {
  try {
    return await prisma.user.delete({ where: { id } });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw new Error("Error al eliminar usuario.");
  } finally {
    await prisma.$disconnect();
  }
};

// Filtrar usuarios
export const filterUsers = async (filters?: UserFilterDto) => {
  try {
    return await prisma.user.findMany({
      where: {
        email: filters?.email,
        role: filters?.role,
        company: filters?.company,
      },
    });
  } catch (error) {
    console.error("Error al filtrar usuarios:", error);
    throw new Error("Error al filtrar usuarios.");
  }
};