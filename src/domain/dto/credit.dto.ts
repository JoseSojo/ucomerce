import { Credit } from "@prisma/client";

// Datos completos de un crédito
export interface CreditDataDto extends Credit {}

// Creación de crédito (sin `id`, `updatedAt` y `history`)
export interface CreditCreateDto {
  userId: number; // Consistencia con el modelo Prisma y Supabase
  available: number;
  limit: number;
}

//Update del credito
export interface CreditUpdateDto {
  userId?: number; //  Agregado para permitir actualización del usuario relacionado
  available?: number | string; // Permitir `string` por compatibilidad con Next.js
  limit?: number | string; // Permitir `string` por compatibilidad con Next.js
}

// Eliminación de crédito (solo `id`)
export interface CreditDeleteDto {
  id: number; 
}

// Filtrar créditos usando Prisma o Supabase
export interface CreditFilterDto {
  userId?: number;
  user?: {
    name?: string;
    email?: string;
  };
  limit?: { gte?: number; lte?: number };
  available?: { gte?: number; lte?: number };
  updatedAt?: { gte?: Date; lte?: Date };
}
