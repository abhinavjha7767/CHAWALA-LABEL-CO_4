import Hero from "@/components/hero";
import MarqueeBanner from "@/components/marquee-banner";
import Services from "@/components/services";
import Products from "@/components/products";
import About from "@/components/about";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeBanner />
      <Services />
      <Products />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
