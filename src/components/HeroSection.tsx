import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p 
            className="font-body text-primary tracking-[0.3em] uppercase text-sm mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Wear Your Voice
          </p>

          {/* Main headline */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Reclaim Your
            <span className="block italic text-primary">Power</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Bold feminist tees for those who refuse to be silenced. 
            Every shirt carries a message. Every purchase fuels the movement.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href="#shop" 
              className="btn-primary flex items-center gap-2 group"
            >
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#mission" 
              className="btn-outline"
            >
              Our Mission
            </a>
          </div>

          {/* Stats */}
          <div 
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">10K+</p>
              <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">Activists</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">1</p>
              <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">Design</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">Ethical</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
