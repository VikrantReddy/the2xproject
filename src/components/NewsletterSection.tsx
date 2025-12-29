import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the movement!", {
        description: "You've joined the Two X Project community."
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Join the <span className="italic">Movement</span>
          </h2>
          <p className="font-body text-primary-foreground/80 mb-10">
            Get exclusive access to new designs, stories from activists worldwide, 
            and updates on how your purchases are making an impact.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/30 rounded-sm font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground transition-colors"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-primary-foreground text-primary font-body font-medium tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-primary-foreground/90 transition-colors group"
            >
              Subscribe
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="font-body text-xs text-primary-foreground/60 mt-6">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
