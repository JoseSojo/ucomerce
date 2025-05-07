import { useEcomerce } from "@/domain/context/EcomerceContext";
import { CategoryDto } from "@/domain/dto/category.dto";
import { Filter, Search } from "lucide-react";

export default function FilterSection() {

    const { category, filters, setFilters } = useEcomerce();

    // const FilterCategory = (param: string) => {
    //     setFilters((prev) => {
    //         return { ...prev, categoryString: param };
    //     })
    // }

    const FilterCategoryId = (category: CategoryDto) => {
        setFilters((prev) => {
            return { ...prev, categorySelect: category };
        })
    }

    return (
        <div className="bg-primary-medium py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Herramientas y Equipos Profesionales</h1>
                    <p className="text-xl text-primary-light mb-8">
                        Encuentra las mejores herramientas para tu proyecto
                    </p>

                    <div className="relative max-w-xl mx-auto">
                        <input
                            // value={filters.categoryString}
                            type="text"
                            // onChange={(e) => FilterCategory(e.target.value)}
                            placeholder="Buscar productos..."
                            className="border border-gray-300 w-full px-4 py-3 rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <Search size={20} className="text-primary-medium" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8 mt-8">
                <div className="flex items-center">
                    <Filter size={20} className="text-primary-medium mr-2" />
                    <span className="text-primary-dark font-medium">Filtrar por:</span>
                </div>
                {category.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => FilterCategoryId(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filters.categorySelect?.name === category.name
                            ? 'bg-[#FFEA00] text-black'
                            : 'bg-[#FFDB58] text-grapy-800 hover:bg-[#FFEA00]'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )

}
