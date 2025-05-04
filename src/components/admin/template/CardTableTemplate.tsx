import { ReactNode,  RefObject } from "react";

interface Props {
    children: ReactNode;
    label: string;
    ref?: RefObject<HTMLDivElement> | null;
    cols?: string
}

export default function CardTableTemplate({ ref, children, label, cols }: Props) {

    return (
        <div ref={ref} className={`container mx-auto px-4 py-8 max-w-7xl border border-gray-300 rounded-lg ${cols}`}>
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                        {/* <Package className="h-8 w-8 text-blue-600" /> */}
                        {label}
                    </h3>
                </div>
                <div className="hidden overflow-hidden bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b flex flex-col md:flex-row gap-4 items-end">
                        {/* <div className="w-full md:w-64">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search Products
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search size={16} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="search"
                                    className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 border"
                                    placeholder="Search by name..."
                                    value={filters.search}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div> */}

                        {/* <div className="w-full md:w-40">
                            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                id="category-filter"
                                className="block w-full sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 border"
                                value={filters.category}
                                onChange={handleCategoryChange}
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div> */}
                    </div>

                    
                </div>
            </div>
            <div className="overflow-x-auto w-full">{children}</div>
        </div>
    )
}
