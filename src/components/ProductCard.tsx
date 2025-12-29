import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  slogan: string;
  price: number;
  image: string;
  delay?: number;
  onAddToCart: (product: { name: string; slogan: string; price: number; image: string }) => void;
}

const ProductCard = ({ name, slogan, price, image, delay = 0, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = () => {
    onAddToCart({ name, slogan, price, image });
    toast.success(`${name} added to cart!`, {
      description: `"${slogan}"`,
    });
  };

  return (
    <div 
      className="product-card group opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="btn-primary flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>
        </div>

        {/* Slogan tag */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-display text-lg italic text-foreground bg-background/90 backdrop-blur-sm px-4 py-2 text-center">
            "{slogan}"
          </p>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold mb-1">{name}</h3>
        <p className="font-body text-primary font-medium">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
