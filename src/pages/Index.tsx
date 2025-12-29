import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import MissionSection from "@/components/MissionSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <MissionSection />
        <NewsletterSection />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
