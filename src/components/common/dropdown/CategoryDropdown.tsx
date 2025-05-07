"use client";

import { useEcomerce } from "@/domain/context/EcomerceContext";
import { CategoryDto, SubCategoryDto } from "@/domain/dto/category.dto";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
    scrolled: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean
}

export default function CategoryDropdown({ scrolled, setIsOpen, isOpen }: Props) {
    const { category, setFilters } = useEcomerce();
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    const FilterCategoryId = (category: CategoryDto | SubCategoryDto) => {
        setFilters((prev) => {
            return { ...prev, categorySelect: category };
        });
        redirect(`/product`);
    }

    return (
        <div className='relative'>
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`flex  items-center gap-2 font-medium hover:text-[#FFDB58] transition-colors ${scrolled ? 'text-[#793205]' : 'text-white'}`}
            >
                Categorías
                <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`max-h-60 overflow-y-auto absolute top-full left-0 flex bg-white rounded-lg shadow-lg transform transition-all duration-200 origin-top ${isOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible'
                    }`}
            >
                {/* Main categories */}
                <div className="max-h-60 overflow-y-auto w-48 py-2 border-r border-gray-200">
                    {category.map((category) => {
                        return (
                            <button
                                onClick={() => { FilterCategoryId(category) }}
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(category.id)}
                                className={`w-full group relative flex items-center justify-between px-4 py-2 cursor-pointer ${activeCategory === category.id
                                    ? 'bg-[#f7f7f7] text-[#16446A]'
                                    : 'text-[#0A082D] hover:bg-[#f7f7f7]'
                                    } transition-colors`}
                            >
                                <div className="flex items-center space-x-3">
                                    {/* <Icon size={18} className="text-[#16446A]" /> */}
                                    <span>{category.name}</span>
                                </div>
                                <ChevronRight size={14} className="text-gray-400" />
                            </button>
                        );
                    })}
                    <Link href={`/category`} className="relative w-full flex items-center justify-center rounded-b-md px-3 py-1 bg-[#FFDB58] hover:bg-[#FFEA00] text-gray-900">Ver más</Link>
                </div>

                {/* Subcategories */}
                <div className="w-56 py-2 bg-[#f7f7f7]">
                    {activeCategory && (
                        <div className="space-y-1">
                            {category
                                .find((cat) => cat.id === activeCategory)
                                ?.subcategory.map((subcat) => (
                                    <button
                                        onClick={() => { FilterCategoryId(subcat) }}
                                        key={subcat.id}
                                        className="w-full block px-4 py-2 text-[#0A082D] hover:bg-white transition-colors"
                                    >
                                        {subcat.name}
                                    </button>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
