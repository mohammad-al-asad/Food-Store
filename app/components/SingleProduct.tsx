import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import type { Product } from "./home/FeaturesProduct";
import { Link } from "react-router";

function SingleProduct({ product }: { product: Product }) {
  return (
    <Link to={`/product/${251594}`} className="group">
      <div className="relative flex flex-col justify-end w-full bg-white rounded-lg border-2 border-neutral-200 hover:border-green-600 hover:shadow-lg hover:shadow-green-200 pt-4 transition-all duration-200">
        {/* Overlay */}
        <div className="absolute z-20 hidden group-hover:flex flex-col gap-2 top-5 right-5">
          <IoEyeOutline
            size={40}
            className="p-2 border-[#F2F2F2] border rounded-full"
          />
          <CiHeart
            size={40}
            className="p-2 border-[#F2F2F2] border rounded-full"
          />
        </div>
        {/* Sale */}
        {product.sale && (
        <div
          className={`absolute top-4 z-20 gap-1 justify-center items-center self-start px-2 py-1 ml-4 text-sm text-white whitespace-nowrap bg-red-500 rounded ${product.price.discount_percentage ? "flex" : "hidden"}`}
        >
          <span className="self-stretch my-auto text-white">Sale</span>
            <span className="self-stretch my-auto font-medium text-white">
              {product.price.discount_percentage}%
            </span>
        </div>
          )}
        {/* Image */}
        <div className="z-10 flex flex-col justify-center p-1.5 mt-0">
          <img
            src={`../${product.images[0]}`}
            className="object-contain max-w-full aspect-square w-[302px]"
            alt={product.name}
          />
        </div>

        <div className="flex justify-between">
          <div className="z-10 flex flex-col justify-center p-4 w-full">
            <div className="flex flex-col w-full max-w-[280px]">
              <h3 className={`text-sm text-neutral-600`}>{product.name}</h3>
              <div className="flex gap-0.5 items-start self-start text-base whitespace-nowrap">
                <span className="font-medium text-zinc-900">
                  {product.price.discounted_price}
                </span>
                {product.price.original_price && (
                  <span className="line-through text-neutral-400">
                    {product.price.discounted_price}
                  </span>
                )}
              </div>
            </div>
            <div>
              <Rating value={product.rating.value} readOnly>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton className="text-green-500" key={index} />
                ))}
              </Rating>
            </div>
          </div>
          {/* Cart */}
          <div className="p-2 m-4 self-end bg-[#F2F2F2] rounded-full group-hover:bg-green-500 group-hover:text-white transition-all duration-200">
            <HiOutlineShoppingBag size={40} className="p-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SingleProduct;
