import Hero from "~/components/Hero";
import Nav from "~/components/Nav";
import Features from "~/components/Features";
import FeaturedProducts from "~/components/FeaturesProduct";
import Catagory from "~/components/Catagory";
import OrganicFood from "~/components/OrganicFood";
import StatsSection from "~/components/StatsSection";
import PromotionalBanners from "~/components/PromotionBanner";
import BestProduct from "~/components/BestProduct";
import Deals from "~/components/Deals";
import Footer from "~/components/Footer";
import Blog from "~/components/Blog";
import Testimonial from "~/components/Testomonial";
import Contact from "~/components/Contact";

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
