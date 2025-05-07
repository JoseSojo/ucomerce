import { ProductDto } from "../../product.dto";
import { Dispatch, SetStateAction } from "react";
import { CategoryDto, SubCategoryDto } from "../../category.dto";
import { CartProductDto } from "../../cart.product.dto";

export interface EcomerceContextInterface {

    filters: FilterInterface;
    category: CategoryDto[];

    products: ProductDto[];
    favorite: ProductDto[];

    cart: CartProductDto[];
    setCart: Dispatch<SetStateAction<CartProductDto[]>>;
    addToCart: (prd: ProductDto, quantity?: number) => void;
    removeToCart: (index: number) => void;
    modifyQuantityToCart: (index: number, quantity: number) => void;
    
    compare: ProductDto[];
    setCompare: Dispatch<SetStateAction<ProductDto[]>>;
    compareOpenModalAndAdd: (prd: ProductDto) => void;
    removeElementCompare: (index: number) => void;

    setFilters: Dispatch<SetStateAction<FilterInterface>>;
    setCategory: Dispatch<SetStateAction<CategoryDto[]>>;
    setProducts: Dispatch<SetStateAction<ProductDto[]>>;
    setFavorite: Dispatch<SetStateAction<ProductDto[]>>;

}

export interface FilterInterface {
    categoryString?: string;
    categorySelect?: CategoryDto | SubCategoryDto;
    subCategoryString?: string;
    subCategoryId?: number;
    name?: string;
    price?: number;
    maxPrice?: number;
    minPrice?: number;
    stock?: number;
    maxStock?: number;
    minStock?: number;
}

