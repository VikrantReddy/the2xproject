import ProductCard from "./ProductCard";

const products = [
  {
    name: "The Equality Tee",
    slogan: "Equal Rights Are Not Debatable",
    price: 38,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=800&fit=crop"
  },
  {
    name: "Resist & Rise",
    slogan: "She Believed She Could, So She Did",
    price: 42,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop"
  },
  {
    name: "The Future Tee",
    slogan: "The Future Is Female",
    price: 38,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop"
  },
  {
    name: "Smash The Patriarchy",
    slogan: "Well-Behaved Women Rarely Make History",
    price: 45,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop"
  },
  {
    name: "My Body My Choice",
    slogan: "Bodily Autonomy Is A Human Right",
    price: 40,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop"
  },
  {
    name: "Fierce & Fearless",
    slogan: "Nevertheless, She Persisted",
    price: 38,
    image: "https://images.unsplash.com/photo-1485968579169-56d4cf3e002c?w=600&h=800&fit=crop"
  },
];

const ProductsSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.name}
              {...product}
              delay={0.1 * index}
            />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <a href="#shop" className="btn-outline inline-block">
            View All Designs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
