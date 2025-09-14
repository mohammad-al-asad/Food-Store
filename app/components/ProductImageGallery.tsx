import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  
  const maxVisibleThumbnails = 4;

  const handleThumbnailUp = () => {
    if (thumbnailStartIndex > 0) {
      setThumbnailStartIndex(thumbnailStartIndex - 1);
    }
  };

  const handleThumbnailDown = () => {
    if (thumbnailStartIndex < images.length - maxVisibleThumbnails) {
      setThumbnailStartIndex(thumbnailStartIndex + 1);
    }
  };

  const visibleThumbnails = images.slice(
    thumbnailStartIndex,
    thumbnailStartIndex + maxVisibleThumbnails
  );

  return (
    <div className="flex gap-6">
      {/* Thumbnail Navigation */}
      <div className="flex flex-col items-center">
        {/* Up Arrow */}
        <button
          onClick={handleThumbnailUp}
          disabled={thumbnailStartIndex === 0}
          className="p-1 mb-4 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronUp size={24} />
        </button>

        {/* Thumbnails */}
        <div className="flex flex-col gap-3">
          {visibleThumbnails.map((image, index) => {
            const actualIndex = thumbnailStartIndex + index;
            return (
              <button
                key={actualIndex}
                onClick={() => setSelectedImage(actualIndex)}
                className={`w-20 h-[90px] rounded border-2 overflow-hidden transition-all duration-200 ${
                  selectedImage === actualIndex
                    ? "border-green-600"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} view ${actualIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Down Arrow */}
        <button
          onClick={handleThumbnailDown}
          disabled={thumbnailStartIndex >= images.length - maxVisibleThumbnails}
          className="p-1 mt-4 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <div className="w-[556px] h-[556px] rounded-lg overflow-hidden bg-gray-50">
          <img
            src={images[selectedImage]}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImageGallery;
