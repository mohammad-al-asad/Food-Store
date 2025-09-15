import type { Product } from "./home/FeaturesProduct";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const DealsCard = ({ product }: { product: Product }) => (
  <article className="group hover:border-green-600 hover:shadow-lg hover:shadow-green-200 pt-4 transition-all duration-200 flex items-center h-[116px] gap-1 p-1 mt-4 w-full bg-white rounded-md border border-solid border-neutral-200 max-w-[312px]">
    <div className="flex items-start p-1.5">
      <img
        src={`../${product.images[0]}`}
        className="object-contain aspect-square w-[102px]"
        alt={product.name}
      />
    </div>
    <div className="flex flex-col justify-center px-3 pt-6 pb-6">
      <div className="flex flex-col w-full max-w-72">
        <h4 className="text-sm text-neutral-600 group-hover:text-green-800">
          {product.name}
        </h4>
        {/* Overlay */}
        <div className="group-hover:flex hidden gap-3 mt-2">
          <div className="bg-[#F2F2F2] rounded-full">
            <IoEyeOutline size={40} className="p-2" />
          </div>
          <div className="bg-[#F2F2F2] rounded-full">
            <CiHeart size={40} className="p-2" />
          </div>
          <div className="rounded-full bg-green-500 text-white">
            <HiOutlineShoppingBag size={40} className="p-2" />
          </div>
        </div>

        <div className="group-hover:hidden flex gap-0.5 items-start self-start text-base whitespace-nowrap">
          <span className="font-medium text-zinc-900">{product.price.discounted_price}</span>
          {product.price.original_price && (
            <span className="text-neutral-400">{product.price.original_price}</span>
          )}
        </div>
      </div>
      <Rating className="group-hover:hidden" value={product.rating.value} readOnly>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-green-500" key={index} />
        ))}
      </Rating>
    </div>
  </article>
);

export default DealsCard;
