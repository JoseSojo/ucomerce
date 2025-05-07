import { Review } from "../types";
import { CategoryDto, SubCategoryDto } from "./category.dto";

export interface ProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryDto;
  subcategory: SubCategoryDto[];
  stock: number;
  imageUrl: string;
  images?: string[];
  specifications?: Record<string, string>;
  rating?: number;
  reviews?: Review[];
  createdAt: string;
  updatedAt: string;
}
