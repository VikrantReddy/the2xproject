import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          {/* Brand */}
          <div>
            <a href="/" className="font-display text-2xl font-bold tracking-tight">
              THE <span className="text-primary">XX</span> PROJECT
            </a>
            <p className="font-body text-muted-foreground mt-4 max-w-sm">
              Empowering women through fashion. Every purchase supports the fight
              for equality and women's rights worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © 2025 The Two X Project. All rights reserved.
          </p>
          <div className="flex gap-6 font-body text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
