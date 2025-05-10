import { Category } from "@prisma/client";

// Datos completos de una categoría
export interface CategoryDataDto extends Category {}

// Creación de categoría (sin `id`)
export interface CategoryCreateDto {
  name: string;
  description?: string;
  parentId?: number;
}

// Actualización de categoría
export interface CategoryUpdateDto {
  name?: string;
  description?: string;
  parentId?: number;
}

// Eliminación de categoría (solo `id`)
export interface CategoryDeleteDto {
  id: number;
}

// Filtrado de categorías (sin `createdAt`, porque no existe en tu modelo)
export interface CategoryFilterDto {
  name?: string;
  parentId?: number;
}