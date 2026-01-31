import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface MenuSectionProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
}

const MenuSection = ({ title, icon: Icon, children }: MenuSectionProps) => {
  return (
    <section className="py-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <h2 className="section-title font-display text-2xl md:text-3xl font-semibold text-charcoal">
          {title}
        </h2>
      </div>
      <div className="space-y-1">
        {children}
      </div>
    </section>
  );
};

export default MenuSection;
