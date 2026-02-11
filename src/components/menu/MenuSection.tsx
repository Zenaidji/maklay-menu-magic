import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface MenuSectionProps {
  title: string;
  icon?: React.ElementType;
  image?: string;
  children: React.ReactNode;
}

const MenuSection = ({
  title,
  icon: Icon,
  image,
  children,
}: MenuSectionProps) => {
  return (
    <section className="my-8">
      <div className="flex items-center gap-3 mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-40 w-40 md:h-42 md:w-42 object-contain"
          />
        ) : Icon ? (
          <Icon className="w-12 h-12 md:w-14 md:h-14 text-primary" />
        ) : null}
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
export default MenuSection;
