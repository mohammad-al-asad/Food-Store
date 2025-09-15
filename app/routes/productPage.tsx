import { useParams } from "react-router";
import SingleProduct from "~/components/SingleProduct";
import type { Product } from "~/components/home/FeaturesProduct";
import productData from "~/json/product.json";
import Footer from "~/components/Footer";
import { IoHomeOutline } from "react-icons/io5";
import ProductDetails from "~/components/product/ProductDetails";
import ProductTab from "~/components/product/ProductTab";
import Newsletter from "~/components/Newsletter";
import Nav from "~/components/Nav";

export interface ProductDetail {
  id: string;
  name: string;
  description: string;
  price: {
    original_price: string;
    discounted_price: string;
    discount_percentage: number;
  };
  availability: string;
  rating: { value: number; quantity: number };
  sku: string;
  brand: string;
  category: string;
  tags: string[];
  additional_information: {
    weight: string;
    organic: boolean;
    nutrition: string;
  };
  images: string[];
}

function ProductPage() {
  const { productId } = useParams();
  // Find product from data
  const product = productData.find((p) => p.id === productId) as ProductDetail;

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        Product not found
      </div>
    );
  }

  // // Related products
  // const relatedProducts: Product[] = [
  //   {
  //     image: "../products/greenApple.jpg",
  //     name: "Green Apple",
  //     price: "$14.99",
  //     originalPrice: "$20.99",
  //     rating: 4,
  //     sale: true,
  //     salePercent: "50%",
  //   },
  //   {
  //     image: "../products/cabbage.jpg",
  //     name: "Chanise Cabbage",
  //     price: "$14.99",
  //     rating: 3,
  //   },
  //   {
  //     image: "../products/greenCapsicum.jpg",
  //     name: "Green Capsicum",
  //     price: "$14.99",
  //     rating: 4,
  //   },
  //   {
  //     image: "../products/ladiesFinger.jpg",
  //     name: "Ladies Finger",
  //     price: "$14.99",
  //     rating: 5,
  //   },
  // ];

  return (
    <div className="bg-white">
      <Nav />
      {/* Breadcrumb */}
      <div className="h-[120px] bg-[url(../Breadcrumbs.png)] bg-cover bg-no-repeat flex items-center pl-[200px]">
        <div className="flex items-center text-gray-400 gap-2 text-[16px]">
          <IoHomeOutline />
          <span>&gt;</span>
          <span>Product</span>
          <span>&gt;</span>
          <span className="text-green-500">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <ProductDetails product={product} />

      {/* Product Tabs */}
      <ProductTab product={product} />

      {/* Related Products */}
      <div className="max-w-[1320px] mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product: Product, index: number) =>
            index > 3 ? null : (
              <SingleProduct
                key={`${product.name}-${index}`}
                product={product}
              />
            )
          )}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
