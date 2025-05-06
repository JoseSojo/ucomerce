import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      {/* Main image */}
      <div 
        className="relative h-[400px] overflow-hidden rounded-lg bg-white cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img 
          src={images[selectedImage]} 
          alt={`${productName} - image ${selectedImage + 1}`}
          className={`w-full h-full object-contain transition-transform duration-500 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
        />
        {isZoomed && (
          <button 
            className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 9h14M5 15h14"></path>
            </svg>
          </button>
        )}
      </div>
      
      {/* Thumbnail images */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
              selectedImage === index ? 'border-[#FFEA00]' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img 
              src={image} 
              alt={`${productName} - thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;