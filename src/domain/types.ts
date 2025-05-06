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

export interface ProductData2 {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  images?: string[];
  specifications?: Record<string, string>;
  rating?: number;
  reviews?: Review[];
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
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

export interface CompanyProfile {
  id: string;
  companyName: string;
  ruc: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  legalRepresentative: {
    name: string;
    position: string;
    email: string;
    phone: string;
  };
  creditInfo: {
    limit: number;
    used: number;
    available: number;
    lastEvaluation: string;
    creditScore: number;
  };
  purchases: Purchase[];
}

export interface Purchase {
  id: string;
  date: string;
  products: PurchaseProduct[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  paymentMethod: string;
  invoiceNumber: string;
}

export interface PurchaseProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}
