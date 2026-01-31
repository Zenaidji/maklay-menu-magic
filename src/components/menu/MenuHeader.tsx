const MenuHeader = () => {
  return (
    <header className="text-center py-12 px-6 border-b-2 border-primary/20">
      <div className="flex justify-center mb-4">
        <div className="text-7xl md:text-8xl font-bold text-gold drop-shadow-lg" style={{ fontFamily: 'Arial Black, sans-serif' }}>
          M
        </div>
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-bold text-gold tracking-tight mb-3 drop-shadow-sm">
        Maklay
      </h1>
      <p className="text-xl text-muted-foreground font-light tracking-wide">
        Fastfood Pizzeria
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
