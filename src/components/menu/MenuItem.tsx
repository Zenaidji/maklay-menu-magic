interface SizeVariant {
  size: string;
  price: string;
}

interface MenuItemProps {
  name: string;
  description?: string;
  price?: string;
  sizes?: SizeVariant[];
}

const MenuItem = ({ name, description, price, sizes }: MenuItemProps) => {
  return (
    <div className="menu-item py-4 border-b border-border/50 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-charcoal">
            {name}
          </h3>
          {description && (
            <p className="text-muted-foreground text-sm mt-1 italic">
              {description}
            </p>
          )}
        </div>
        {price && !sizes && (
          <span className="price-tag text-lg whitespace-nowrap">{price}</span>
        )}
      </div>

      {sizes && sizes.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {sizes.map((variant, index) => (
            <div key={index} className="size-badge flex items-center gap-2">
              <span className="font-semibold text-charcoal">
                {variant.size}
              </span>
              <span className="text-primary font-semibold">
                {variant.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
