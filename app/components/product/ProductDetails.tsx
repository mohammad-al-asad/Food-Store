import { FiMinus, FiPlus } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import SocialLink from "~/components/SocialLink";
import ProductImageGallery from "~/components/product/ProductImageGallery";
import { Rating, RatingButton } from "~/components/ui/shadcn-io/rating";
import { useState } from "react";
import type { ProductDetail } from "~/routes/productPage";
import Button from "../ui/Button";

function ProductDetails({ product }: { product: ProductDetail }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };
  return (
    <div className="max-w-[1320px] mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Product Images */}
        <div className="w-full">
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          {/* Product Header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-semibold text-gray-900">
                {product.name}
              </h1>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                {product.availability}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <Rating
                  value={product.rating.value}
                  readOnly
                  className="text-green-500"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <RatingButton key={index} />
                  ))}
                </Rating>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating.quantity} Review
                </span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium text-gray-800">SKU:</span>
                <span className="text-gray-600">{product.sku}</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-xl text-gray-400 line-through">
                {product.price.original_price}
              </span>
              <span className="text-2xl font-medium text-green-700">
                {product.price.discounted_price}
              </span>
            </div>
            <span className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full">
              {product.price.discount_percentage}% Off
            </span>
          </div>

          <div className="w-full h-px bg-gray-200"></div>

          {/* Brand & Share */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-900">Brand:</span>
              <span className="font-medium text-green-600">
                {product.brand}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-900">Share item:</span>
              <SocialLink />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-[568px]">
            {product.description}
          </p>

          {/* CTA Section */}
          <div className="flex items-center gap-3 p-4 border-t border-b border-gray-200">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-200 rounded-full">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <FiMinus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="w-10 text-center text-gray-900">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <FiPlus className="w-4 h-4 text-gray-900" />
              </button>
            </div>

            {/* Add to Cart */}
            <button className="flex justify-center items-center w-full h-[45px] bg-green-600 hover:bg-green-700 text-white py-4 px-10 rounded-full">
              <span>Add to Cart</span>
              <HiOutlineShoppingBag className="w-4 h-4 ml-3" />
            </button>

            {/* Wishlist */}
            <button className="p-4 bg-green-50 text-green-700 rounded-full hover:bg-green-100">
              <CiHeart className="w-5 h-5" />
            </button>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <span className="font-medium text-gray-900">Category:</span>
              <span className="text-gray-500">{product.category}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-medium text-gray-900">Tag:</span>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-gray-500 hover:underline hover:text-gray-900 cursor-pointer`}
                  >
                    {tag}
                    {index < product.tags.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
