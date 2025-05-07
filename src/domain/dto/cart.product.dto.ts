import { ProductDto } from "./product.dto";

export interface CartProductDto {
  product: ProductDto;
  quantity: number
}
