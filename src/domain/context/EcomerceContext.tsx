"use client"

import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { EcomerceContextInterface, FilterInterface } from "../dto/interface/context/ecomerce.context.dto";
import { ProductDto } from "../dto/product.dto";
import mockCategory from "../mock/category";
import { CategoryDto, SubCategoryDto } from "../dto/category.dto";
import generateMockProducts from "../mock/products";
import ComparisonModal from "@/components/product/ComparationModal";
import { CartProductDto } from "../dto/cart.product.dto";
import Toast from "@/components/common/Toast";

const DefaultEcomerceContext: EcomerceContextInterface = {
    category: [],
    compare: [],
    favorite: [],
    products: [],
    filters: {},

    setCart: () => { },
    setCategory: () => { },
    setCompare: () => { },
    setFavorite: () => { },
    setProducts: () => { },
    setFilters: () => { },
    
    compareOpenModalAndAdd: () => {},
    removeElementCompare: () => {},

    addToCart: () => {},
    removeToCart: () => {},
    modifyQuantityToCart: () => {},
    cart: [],

}

const EcomerceConxtex = createContext(DefaultEcomerceContext);

interface Props {
    children: ReactNode
}

export const EcomerceProvider: FC<Props> = ({ children }) => {

    const [compare, setCompare] = useState<ProductDto[]>([]);
    const [cart, setCart] = useState<CartProductDto[]>([]);
    const [category, setCategory] = useState<CategoryDto[]>(mockCategory);
    const [favorite, setFavorite] = useState<ProductDto[]>([]);
    const [products, setProducts] = useState<ProductDto[]>([]);
    const [filters, setFilters] = useState<FilterInterface>({});

    // MODAL
    const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);

    const addToCart = (prd: ProductDto, quantity?:number) => {
        const found = cart.find(item => item.product.id === prd.id);
        if(found) return <Toast message={`${prd.name} ya en el carrito`} type="error" onClose={() => {}} duration={200} />;
        setCart(prev => {
            return [...prev, {product:prd,quantity:quantity ? quantity : 1}];
        })
    }
    
    const removeToCart = (index: number) => {
        setCart(prev => {
            const newCompare = [...prev];
            newCompare.splice(index,1);
            console.log(newCompare);
            return newCompare;
        })
    }

    const modifyQuantityToCart = (index: number, quantity: number) => {
        setCart(prev => {
            const newCompare = [...prev];
            newCompare[index] = { ...newCompare[index],  quantity }
            return newCompare;
        })
    }

    const compareOpenModalAndAdd = (prd: ProductDto) => {
        setCompare(prev => {
            return [...prev, prd];
        })
        if(compare.length >= 1) setIsComparisonModalOpen(true);
    }

    const removeElementCompare = (index: number) => {
        setCompare(prev => {
            const newCompare = [...prev];
            newCompare.filter((item,i) => i !== index)
            return newCompare;
        })
    }

    function isCategoryDto(obj: CategoryDto | SubCategoryDto): obj is CategoryDto {
        return 'color' in obj && 'subcategory' in obj;
        // También podrías usar: return (obj as CategoryDto).subcategory !== undefined;
    }

    const GetProducts = async () => {
        if (filters.categorySelect && isCategoryDto(filters.categorySelect)) {
            const productResponse: ProductDto[] = generateMockProducts(
                10,
                filters.categorySelect
            );
            setProducts(productResponse);
            return productResponse;
        }
        const productResponse: ProductDto[] = generateMockProducts(10);
        setProducts(productResponse);
        return productResponse;

    }

    useEffect(() => {
        (async () => await GetProducts())()
    }, [filters])

    return (
        <EcomerceConxtex.Provider value={{
            cart,
            category,
            compare,
            favorite,
            filters,
            products,
            setCompare,
            setCart,
            setCategory,
            setFavorite,
            setProducts,
            setFilters,
            compareOpenModalAndAdd,
            removeElementCompare,
            removeToCart,
            addToCart,
            modifyQuantityToCart
        }}>
            <ComparisonModal
                isOpen={isComparisonModalOpen}
                onClose={() => setIsComparisonModalOpen(false)}
            />
            {children}
        </EcomerceConxtex.Provider>
    )
}

export const useEcomerce = () => useContext(EcomerceConxtex);
