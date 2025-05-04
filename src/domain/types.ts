export interface User {
  email: string;
  name: string;
  isLoggedIn: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  rating: number;
}

export interface Category {
  id: number;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: number;
  name: string;
}

export interface Sale {
  id: string;
  product: string;
  quantity: number;
  unitPrice: number;
  total: number;
  date: Date;
  paymentMethod: string;
}

export interface ActiveUser {
  id: string;
  name: string;
  email: string;
  lastActive: Date;
  role: 'Admin' | 'User' | 'Guest';
  avatar?: string;
  isActive: boolean;
}

export interface ActiveCredit {
  id: string;
  user: {
    name: string;
    email: string;
  };
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;
  approvalDate: Date;
  status: 'Activo' | 'Moroso' | 'Liquidado';
  nextPaymentDate: Date;
}

export interface ProductCrud {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductDataDTO = Omit<ProductCrud, `id` | `createdAt` | `updatedAt`>

export type CategoryDataDTO = Omit<Category, `id` | `subcategories`>
