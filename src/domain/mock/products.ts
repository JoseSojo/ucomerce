import { faker } from "@faker-js/faker";
import { ProductDto } from "../dto/product.dto";
import mockCategory from "./category";
import { CategoryDto, SubCategoryDto } from "../dto/category.dto";

export const generateMockProducts = (count: number, cat?: CategoryDto): ProductDto[] => {
    const categories = mockCategory;
    const selected = cat 
      ? cat
      : faker.helpers.arrayElement(categories);
  
    return Array.from({ length: count }, () => {
      const creationDate = faker.date.between({
        from: '2023-01-01',
        to: '2025-05-01'
      }).toISOString();
  
      return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
        category: selected,
        subcategory: [faker.helpers.arrayElement(selected.subcategory),faker.helpers.arrayElement(selected.subcategory)],
        stock: faker.number.int({ min: 0, max: 100 }),
        imageUrl: `/image.jpeg`,
        createdAt: creationDate,
        updatedAt: faker.date.between({
          from: creationDate,
          to: new Date().toISOString()
        }).toISOString()
      };
    });
  };

export default generateMockProducts;