import { Pizza, Sandwich, Wind, Coffee, Printer } from "lucide-react";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuSection from "@/components/menu/MenuSection";
import MenuItem from "@/components/menu/MenuItem";
import MenuFooter from "@/components/menu/MenuFooter";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Print Button */}
      <div className="no-print max-w-3xl mx-auto mb-6 flex justify-center">
        <Button 
          onClick={handlePrint}
          className="bg-primary hover:bg-terracotta-dark text-primary-foreground gap-2"
        >
          <Printer className="w-4 h-4" />
          Imprimer le menu
        </Button>
      </div>

      {/* Menu Container */}
      <div className="menu-container max-w-3xl mx-auto rounded-2xl p-6 md:p-10">
        <MenuHeader />

        {/* Pizzas Section */}
        <MenuSection title="Nos Pizzas" icon={Pizza}>
          <MenuItem
            name="Mega-Pizza Spéciale Maison"
            description="Notre création signature avec les meilleurs ingrédients"
            sizes={[
              { size: "Mega", price: "1200 DA" },
              { size: "Medium", price: "600 DA" },
            ]}
          />
          <MenuItem
            name="Pizza Mexicaine"
            description="Merguez, escalope, piment, champignon, fromage rouge, cheddar"
            sizes={[
              { size: "M", price: "400 DA" },
              { size: "L", price: "600 DA" },
              { size: "XL", price: "900 DA" },
            ]}
          />
          <MenuItem
            name="Pizza Thon Fromage"
            description="Thon, fromage cheddar, cornichon, câpres"
            sizes={[
              { size: "M", price: "300 DA" },
              { size: "L", price: "500 DA" },
              { size: "XL", price: "800 DA" },
            ]}
          />
          <MenuItem
            name="Pizza Margarita"
            description="Sauce tomate, mozzarella, basilic frais"
            price="300 DA"
          />
          <MenuItem
            name="SP-MZ Spéciale"
            description="Gruyère, cheddar, fromage rouge, viande hachée, champignon, escalope"
            sizes={[
              { size: "M", price: "400 DA" },
              { size: "L", price: "600 DA" },
            ]}
          />
        </MenuSection>

        <div className="decorative-line my-4" />

        {/* Sandwiches Section */}
        <MenuSection title="Sandwiches" icon={Sandwich}>
          <MenuItem
            name="Spécial Maison"
            description="Notre sandwich signature garni généreusement"
            sizes={[
              { size: "L", price: "300 DA" },
              { size: "XL", price: "450 DA" },
            ]}
          />
          <MenuItem
            name="Sandwich Escalope"
            description="Escalope grillée, crudités, sauce maison"
            sizes={[
              { size: "L", price: "250 DA" },
              { size: "XL", price: "400 DA" },
            ]}
          />
        </MenuSection>

        <div className="decorative-line my-4" />

        {/* Soufflés Section */}
        <MenuSection title="Soufflés" icon={Wind}>
          <MenuItem
            name="Soufflé Spécial"
            description="Fromage, cheddar, gruyère, merguez, escalope"
            sizes={[
              { size: "L", price: "150 DA" },
              { size: "XL", price: "250 DA" },
            ]}
          />
          <MenuItem
            name="Soufflé Nature"
            description="Fromage fondu"
            price="100 DA"
          />
        </MenuSection>

        <div className="decorative-line my-4" />

        {/* Hot Drinks Section */}
        <MenuSection title="Boissons Chaudes" icon={Coffee}>
          <MenuItem name="Café Capsule" price="70 DA" />
          <MenuItem name="Good Coffee" price="50 DA" />
          <MenuItem name="Café Crème" price="50 DA" />
          <MenuItem name="Café Basic" price="30 DA" />
          <MenuItem name="Infusion Thé" price="40 DA" />
          <MenuItem name="Thé Maison" price="40 DA" />
          <MenuItem 
            name="Thé Zenjabil" 
            description="Au gingembre frais"
            price="40 DA" 
          />
        </MenuSection>

        <MenuFooter />
      </div>
    </div>
  );
};

export default Index;
