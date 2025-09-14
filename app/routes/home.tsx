import Hero from "~/components/home/Hero";
import Nav from "~/components/Nav";
import Features from "~/components/home/Features";
import FeaturedProducts from "~/components/home/FeaturesProduct";
import Catagory from "~/components/home/Catagory";
import OrganicFood from "~/components/home/OrganicFood";
import StatsSection from "~/components/home/StatsSection";
import PromotionalBanners from "~/components/home/PromotionBanner";
import BestProduct from "~/components/home/BestProduct";
import Deals from "~/components/home/Deals";
import Footer from "~/components/Footer";
import Blog from "~/components/Blog";
import Testimonial from "~/components/home/Testomonial";
import Contact from "~/components/home/Contact";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Features />
      <FeaturedProducts />
      <Catagory />
      <OrganicFood />
      <StatsSection />
      <PromotionalBanners />
      <BestProduct />
      <Deals />
      <Blog />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
