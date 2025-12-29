import { Heart, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Ethically Made",
    description: "Every garment is produced in fair-wage factories with sustainable materials."
  },
  {
    icon: Users,
    title: "Community First",
    description: "10% of all profits go directly to women's rights organizations worldwide."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Supporting activists, survivors, and changemakers in over 30 countries."
  }
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 origin-top-right" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="font-body text-primary tracking-[0.3em] uppercase text-sm mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Fashion as a Form of 
              <span className="block italic text-primary">Activism</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body">
              <p>
                The Two X Project was born from frustration turned into action. In a world that 
                still questions women's rights to their own bodies, their voices, and their equality, 
                we chose to speak through what we wear.
              </p>
              <p>
                Every thread tells a story. Every slogan sparks a conversation. Every purchase 
                is a vote for the world we want to live in.
              </p>
              <p className="text-foreground font-medium">
                This isn't just clothing. It's armor. It's solidarity. It's revolution.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pl-6 border-l-2 border-primary">
              <p className="font-display text-xl italic text-foreground">
                "A woman in revolt is a woman on fire."
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-2 block not-italic">
                — The XX Project Manifesto
              </cite>
            </blockquote>
          </div>

          {/* Right - Values */}
          <div className="space-y-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-8 rounded-sm border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="font-body text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
