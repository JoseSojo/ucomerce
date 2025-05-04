import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Category } from '@/domain/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSubcategoryChange: (subcategory: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(selectedCategory);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      onCategoryChange(null);
      onSubcategoryChange(null);
      setExpandedCategory(null);
    } else {
      onCategoryChange(categoryName);
      onSubcategoryChange(null);
      setExpandedCategory(categoryName);
    }
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    onSubcategoryChange(selectedSubcategory === subcategoryName ? null : subcategoryName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="border-b border-gray-100 pb-2">
            <div 
              className="flex justify-between items-center py-2 cursor-pointer group"
              onClick={() => toggleCategory(category.name)}
            >
              <div
                className={`flex items-center ${
                  selectedCategory === category.name ? 'text-indigo-600 font-medium' : 'text-gray-700'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick(category.name);
                }}
              >
                <span className="group-hover:text-indigo-500">{category.name}</span>
              </div>
              
              {expandedCategory === category.name ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </div>
            
            {expandedCategory === category.name && (
              <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                {category.subcategories.map((subcategory) => (
                  <div 
                    key={subcategory.id}
                    className={`py-1 px-2 cursor-pointer rounded-md ${
                      selectedSubcategory === subcategory.name 
                        ? 'bg-indigo-50 text-indigo-600' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                  >
                    {subcategory.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {(selectedCategory || selectedSubcategory) && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button
            onClick={() => {
              onCategoryChange(null);
              onSubcategoryChange(null);
              setExpandedCategory(null);
            }}
            className="text-indigo-600 text-sm font-medium hover:text-indigo-700"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;