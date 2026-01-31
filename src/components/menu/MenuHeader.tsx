import { Pizza } from "lucide-react";

const MenuHeader = () => {
  return (
    <header className="text-center py-12 px-6 border-b-2 border-primary/20">
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-primary/10">
          <Pizza className="w-12 h-12 text-primary" />
        </div>
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold text-charcoal tracking-tight mb-3">
        Maklay
      </h1>
      <p className="text-xl text-muted-foreground font-light tracking-wide">
        Pizzeria Artisanale
      </p>
      <div className="flex justify-center items-center gap-4 mt-6">
        <span className="h-px w-12 bg-primary/30" />
        <span className="hero-badge">
          Spécialités Maison
        </span>
        <span className="h-px w-12 bg-primary/30" />
      </div>
    </header>
  );
};

export default MenuHeader;
