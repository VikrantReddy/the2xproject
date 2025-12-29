import ProductCard from "./ProductCard";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/lib/products";

const ProductsSection = () => {
  const { addToCart } = useCart();

  // Dynamic grid layout based on product count
  const getGridClass = () => {
    const count = products.length;
    if (count === 1) return "grid-cols-1 max-w-sm mx-auto";
    if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto";
    if (count === 3) return "grid-cols-1 md:grid-cols-3";
    if (count === 4) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
    if (count === 5) return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary tracking-[0.3em] uppercase text-sm mb-4">
            The Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Wear Your <span className="italic text-primary">Resistance</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Each tee is a statement. Each purchase supports women's rights organizations.
          </p>
        </div>

        {/* Products grid */}
        <div className={`grid ${getGridClass()} gap-8`}>
          {products.map((product, index) => (
            <ProductCard 
              key={product.name}
              {...product}
              delay={0.1 * index}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <button disabled className="btn-outline inline-block opacity-60 cursor-not-allowed">
            More Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
