import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-2xl font-bold tracking-tight">
            THE <span className="text-primary">XX</span> PROJECT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#shop" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </a>
            <a href="#mission" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              Our Mission
            </a>
            <a href="#about" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:text-primary transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#shop" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </a>
              <a href="#mission" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
                Our Mission
              </a>
              <a href="#about" className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
