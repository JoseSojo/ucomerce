export interface SubCategoryDto {
    id: number;
    name: string;
}

export interface CategoryDto {
    id: number;
    name: string;
    color: string;
    subcategory: SubCategoryDto[];
}
