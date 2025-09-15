import { useState } from "react";

import type { ProductDetail } from "~/routes/productPage";
import ProductVideo from "./ProductVideo";

function ProductTab({ product }: { product: ProductDetail }) {
  const [activeTab, setActiveTab] = useState("descriptions");

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab("descriptions")}
              className={`px-4 py-4 text-base font-medium border-b-2 transition-colors ${
                activeTab === "descriptions"
                  ? "border-green-600 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Descriptions
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`px-4 py-4 text-base font-medium border-b-2 transition-colors ${
                activeTab === "additional"
                  ? "border-green-600 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Additional Information
            </button>
            <button
              onClick={() => setActiveTab("feedback")}
              className={`px-4 py-4 text-base font-medium border-b-2 transition-colors ${
                activeTab === "feedback"
                  ? "border-green-600 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Customer Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-[1320px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-5">
            {activeTab === "descriptions" && (
              <>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                  dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
                  mi viverra velit, pellentesque tristique neque mi eget nulla.
                  Proin luctus elementum neque et pharetra.
                </p>

                <div className="flex flex-col gap-4 my-4">
                  {[
                    "100 g of fresh leaves provides.",
                    "Aliquam ac est at augue volutpat elementum.",
                    "Quisque nec enim eget sapien molestie.",
                    "Proin convallis odio volutpat finibus posuere.",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      {/* Correct Icon */}
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Cras et diam maximus, accumsan sapien et, sollicitudin velit.
                  Nulla blandit eros non turpis lobortis iaculis at ut massa.
                </p>
              </>
            )}

            {activeTab === "additional" && (
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Additional Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium text-gray-900">Weight:</span>
                    <span className="text-gray-500 ml-2">
                      {product.additional_information.weight}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Organic:</span>
                    <span className="text-gray-500 ml-2">
                      {product.additional_information.organic ? "Yes" : "No"}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium text-gray-900">
                      Nutrition:
                    </span>
                    <span className="text-gray-500 ml-2">
                      {product.additional_information.nutrition}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Customer Reviews
                </h3>
                <p className="text-gray-500 text-sm">
                  No reviews yet. Be the first to review this product!
                </p>
              </div>
            )}
          </div>

          {/* Video & Features */}
          <ProductVideo />
        </div>
      </div>
    </>
  );
}

export default ProductTab;
