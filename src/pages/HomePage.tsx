import Hero from "../components/Hero";
import {
  ServicesStrip,
  Categories,
  Brands,
  About,
  Products,
  CTABanner,
  Testimonials,
} from "../components/Sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <Categories />
      <Brands />
      <About />
      <Products />
      <CTABanner />
      <Testimonials />
    </>
  );
}
