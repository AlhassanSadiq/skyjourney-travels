import HeroSection from "@/components/sections/HeroSection";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import PopularPackages from "@/components/sections/PopularPackages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <PopularPackages />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <NewsletterCTA />
      <ContactCTA />
    </>
  );
}
