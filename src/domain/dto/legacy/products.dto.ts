import { Product } from "@prisma/client";

// Datos completos de un producto
export interface ProductDataDto extends Product {}

// Creación de producto (sin `id` y `createdAt`)
export interface ProductCreateDto {
  name: string;
  description?: string;
  price: number; // Prisma usa Decimal, pero TS lo manejará como number
  sku: string;
  categoryId?: number;
  stock?: number;
  imageUrl?: string;
  active?: boolean;
}

// Actualización de producto
export interface ProductUpdateDto {
  name?: string;
  description?: string;
  price?: number | string; // Permitir `string` por compatibilidad con Next.js
  sku?: string;
  categoryId?: number;
  stock?: number;
  imageUrl?: string;
  active?: boolean;
}

// Eliminación de producto (solo `id`)
export interface ProductDeleteDto {
  id: number;
}

// Filtrado de productos
export interface ProductFilterDto {
  name?: string;
  categoryId?: number;
  price?: { gte?: number; lte?: number };
  stock?: { gte?: number; lte?: number };
  active?: boolean;
  createdAt?: { gte?: Date; lte?: Date };
}