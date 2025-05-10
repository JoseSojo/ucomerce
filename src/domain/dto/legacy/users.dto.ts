import { User } from "@prisma/client";

// Datos completos de un usuario
export interface UserDataDto extends User {}

// Creación de usuario (sin `id` y `createdAt`)
export interface UserCreateDto {
  email: string;
  role?: "cliente";
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  rfc?: string;
}

// Actualización de usuario
export interface UserUpdateDto {
  email?: string;
  role?: "cliente";
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  rfc?: string;
}

// Eliminación de usuario (solo `id`)
export interface UserDeleteDto {
  id: number;
}

// Filtrado de usuarios
export interface UserFilterDto {
  email?: string;
  role?: "cliente";
  company?: string;
}