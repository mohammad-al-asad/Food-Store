import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Dropdown from "../components/ui/Dropdown";
import ChipView from "../components/ui/ChipView";
import SeekBar from "../components/ui/SeekBar";
import Pagination from "../components/ui/Pagination";
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";
import Newsletter from "~/components/Newsletter";
import SingleProduct from "~/components/SingleProduct";
import { FaChevronUp } from "react-icons/fa";
import { Rating, RatingButton } from "~/components/ui/shadcn-io/rating";
import { IoHomeOutline } from "react-icons/io5";
import type { Product } from "~/components/home/FeaturesProduct";
import { useSearchParams } from "react-router";
import { categories as categoryData } from "~/components/home/Catagory";
import type { Category } from "~/components/home/Catagory";
import productData from "~/json/product.json";
import DealsCard from "~/components/DealsCard";

interface ChipItem {
  id: string | number;
  label: string;
  value?: any;
  disabled?: boolean;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
}

const shop = () => {
  const [params, setParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(50);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("latest");
  var [categories, setCategories] = useState<Category[]>(categoryData);

  useEffect(() => {
    // Set the page catagory according to param
    categoryData.map((category, index) => {
      const cat = params.get("cat");

      if (cat) {
        if (category.name.toLowerCase().replaceAll(" ", "_") == cat) {
          categoryData[index].isSelected = true;
          setSelectedCategory(category.name);
        } else {
          categoryData[index].isSelected = false;
        }
      }
    });
    // Set the page catagory according to selection
    categories.map((category) => {
      if (category.isSelected) {
        setSelectedCategory(category.name);
        return setParams(
          `?cat=${category.name.toLowerCase().replaceAll(" ", "_")}`
        );
      }
    });
  }, [categories]);

  const [ratings, setRatings] = useState([
    { count: 5, isSelected: false },
    { count: 4, isSelected: false },
    { count: 3, isSelected: false },
    { count: 2, isSelected: false },
    { count: 1, isSelected: false },
  ]);

  // Sample chip data for popular tags
  const popularTags: ChipItem[] = [
    { id: 1, label: "Healthy", variant: "default" },
    { id: 2, label: "Low fat", variant: "default" },
    { id: 3, label: "Vegetarian", variant: "default" },
    { id: 4, label: "Kid foods", variant: "default" },
    { id: 5, label: "Vitamins", variant: "default" },
    { id: 6, label: "Bread", variant: "default" },
    { id: 7, label: "Meat", variant: "default" },
    { id: 8, label: "Snacks", variant: "default" },
    { id: 9, label: "Tiffin", variant: "default" },
    { id: 10, label: "Launch", variant: "default" },
    { id: 11, label: "Dinner", variant: "default" },
    { id: 12, label: "Breackfast", variant: "default" },
    { id: 13, label: "Fruit", variant: "default" },
  ];

  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Customer Rating" },
  ];

  // Rating Stars Generator
  const renderStars = (rating: number) => {
    return (
      <Rating value={rating} readOnly>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton className="text-green-500" key={index} />
        ))}
      </Rating>
    );
  };

  // Filtered products logic
  const filteredProducts = productData.filter((product) => {
    if (selectedCategory == "all") return true;
    // Category filter
    if (selectedCategory) {
      if (
        product.category.toLowerCase().replaceAll(" ", "_") !==
        selectedCategory.toLowerCase().replaceAll(" ", "_")
      ) {
        return false;
      }
    }

    // Price filter (assuming price is a string like "$14.99")
    // const priceNum = Number(product.price.discounted_price.replace(/[^0-9.]/g, ""));
    // if (priceNum > priceRange) {
    //   return false;
    // }

    // Rating filter
    const selectedRating = ratings.find((r) => r.isSelected);
    if (
      selectedRating &&
      product.rating?.value &&
      product.rating?.value < selectedRating.count
    ) {
      return false;
    }

    return true;
  });

  return (
    <>
      <main className="w-full bg-white">
        <Nav />

        {/* Breadcrumb Section */}
        <section className="h-[120px] bg-[url(../Breadcrumbs.png)] bg-cover bg-no-repeat flex items-center pl-[200px]">
          <div className="flex items-center text-gray-400 gap-2 text-[16px]">
            <IoHomeOutline />
            <span>&gt;</span>
            <span>Catagory</span>
            <span>&gt;</span>
            <span className="text-green-500">{selectedCategory}</span>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Filter and Sort Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 mb-6 lg:mb-10">
              <Button
                text="Filter"
                text_font_size="14"
                text_font_weight="600"
                text_color="#ffffff"
                fill_background_color="#00b206"
                border_border_radius="22px"
                padding="10px 32px 10px 52px"
                className="flex items-center gap-3"
              >
                Filter
                <img src="../filter.png" alt="filter" className="w-5 h-4" />
              </Button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1 justify-center">
                <span className="text-sm font-normal leading-[21px] text-gray-500 font-['Poppins']">
                  Sort by:
                </span>
                <Dropdown
                  placeholder="Latest"
                  options={sortOptions}
                  value={sortBy}
                  onChange={(value) => setSortBy(value as string)}
                  layout_width="200px"
                  className="min-w-[150px]"
                />
              </div>

              <div className="text-base font-normal leading-[24px] text-gray-900 font-['Poppins']">
                <span className="font-semibold">52</span> Results Found
              </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Sidebar */}
              <aside className="w-full lg:w-[312px] flex-shrink-0">
                <div className="space-y-6 lg:space-y-8">
                  {/* Categories */}
                  <div className="bg-white">
                    <div className="flex justify-between items-center mb-5">
                      <h3 className="text-xl font-medium leading-[30px] text-gray-900 font-['Poppins']">
                        All Categories
                      </h3>
                      <FaChevronUp />
                    </div>

                    <div className="space-y-2.5">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 py-2.5"
                        >
                          <input
                            type="radio"
                            onChange={() => {
                              setCategories(
                                categories.map((cat, i) => ({
                                  ...cat,
                                  isSelected: i === index, // only the clicked one is true
                                }))
                              );
                            }}
                            checked={category.isSelected}
                            className="w-5 h-5 rounded-full"
                          />
                          <div className="flex items-center gap-1 flex-1">
                            <span className="text-sm font-normal leading-[21px] text-gray-900 font-['Poppins']">
                              {category.name}
                            </span>
                            <span className="text-sm font-normal leading-[21px] text-gray-500 font-['Poppins']">
                              ({category.count})
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="bg-white select-none">
                    <div className="flex justify-between items-end mb-4">
                      <h3 className="text-xl font-medium leading-[30px] text-gray-900 font-['Poppins']">
                        Price
                      </h3>
                      <FaChevronUp />
                    </div>

                    <div className="space-y-4">
                      <SeekBar
                        min={0}
                        max={1500}
                        value={priceRange}
                        onChange={setPriceRange}
                        fill_background_color="#e6e6e6"
                        border_border_radius="3px"
                        className="w-full"
                      />
                      <p className="text-sm font-normal leading-[21px] font-['Poppins']">
                        <span className="text-gray-600">Price:</span>
                        <span className="text-gray-900 font-medium">
                          {" "}
                          50 — 1,500
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div className="bg-white">
                    <h3 className="text-xl font-medium leading-[30px] text-gray-900 font-['Poppins']">
                      Price
                    </h3>

                    <div className="space-y-2.5 mt-2.5">
                      {ratings.map((rating, index) => (
                        <div
                          key={rating.count}
                          className="flex items-center gap-2 py-2.5"
                        >
                          <input
                            type="checkbox"
                            className="w-5 h-5 rounded-lg"
                            onChange={() => {
                              setRatings(
                                ratings.map((rat, i) => ({
                                  ...rat,
                                  isSelected: i === index, // only the clicked one is true
                                }))
                              );
                            }}
                            checked={rating.isSelected}
                          />
                          <div className="flex items-center gap-1">
                            <div className="flex items-center">
                              {renderStars(rating.count)}
                            </div>
                            <span className="text-sm font-normal leading-[21px] text-gray-900 font-['Poppins'] ml-1">
                              {rating.count === 5
                                ? " 5.0"
                                : ` ${rating.count}.0 & up`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-white">
                    <div className="border-t border-gray-300 pt-5">
                      <div className="flex justify-between items-center mb-5">
                        <h3 className="text-xl font-medium leading-[30px] text-gray-900 font-['Poppins']">
                          Popular Tag
                        </h3>
                        <FaChevronUp />
                      </div>

                      <ChipView
                        chips={popularTags}
                        multiSelect={true}
                        className="flex flex-wrap gap-2"
                      />
                    </div>
                  </div>

                  {/* Discount Banner */}
                  <div className="relative w-full mx-auto h-[295px] bg-no-repeat rounded-[10px] py-5 text-center ">
                    <img
                      src="../banner/banner-4.png"
                      alt="bg"
                      className="size-full"
                    />
                  </div>

                  {/* Sale Products */}
                  <div className="bg-white">
                    <h3 className="text-xl font-medium leading-[30px] text-gray-900 font-['Poppins'] mb-3">
                      Sale Products
                    </h3>

                    <div className="space-y-4">
                      {productData.map((product: Product, index: number) =>
                        index > 1 ? null : <DealsCard product={product} />
                      )}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? <h1 className="text-center my-56">No Product Found</h1> : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {filteredProducts.map((product, index) => (
                      <SingleProduct key={index} product={product} />
                    ))}
                  </div>
                )}

                {/* Pagination */}
                <div className="flex justify-center mt-8 lg:mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={5}
                    onPageChange={setCurrentPage}
                    maxVisiblePages={5}
                    showFirstLast={true}
                    showPrevNext={true}
                    className="flex items-center gap-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        <Footer />
      </main>
    </>
  );
};

export default shop;
