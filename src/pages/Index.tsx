import MenuHeader from "@/components/menu/MenuHeader";
import MenuSection from "@/components/menu/MenuSection";
import MenuItem from "@/components/menu/MenuItem";
import MenuFooter from "@/components/menu/MenuFooter";
import { Button } from "@/components/ui/button";
import { Printer, Download } from "lucide-react";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Print / Download Buttons */}
      <div className="no-print max-w-3xl mx-auto mb-6 flex justify-center gap-4">
        <Button
          onClick={handlePrint}
          className="bg-primary hover:bg-terracotta-dark text-primary-foreground gap-2"
        >
          <Printer className="w-4 h-4" />
          Imprimer le menu
        </Button>
        <Button
          onClick={handleDownload}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
        >
          <Download className="w-4 h-4" />
          Télécharger le menu
        </Button>
      </div>

      {/* Menu Container */}
      <div className="menu-container max-w-3xl mx-auto rounded-2xl p-6 md:p-10">
        <MenuHeader />

        {/* Pizzas Section */}
        <MenuSection title="Nos Pizzas" image="public/images/pizza.png">
          <MenuItem
            name="Pizza Spéciale Maison"
            description="Notre création les ingrédients maison"
            sizes={[
              { size: "XL", price: "1200 DA" },
              { size: "L", price: "600 DA" },
              { size: "M", price: "400 DA" },
            ]}
          />
          <MenuItem
            name="Pizza Mexicaine"
            description="Merguez, escalope, piment, champignon, Fromage rouge, Cheddar"
            sizes={[
              { size: "M", price: "400 DA" },
              { size: "L", price: "600 DA" },
              { size: "XL", price: "900 DA" },
            ]}
          />
          <MenuItem
            name="Pizza Thon Fromage"
            description="Thon, cheddar, cornichon, câpres"
            sizes={[
              { size: "M", price: "300 DA" },
              { size: "L", price: "500 DA" },
              { size: "XL", price: "800 DA" },
            ]}
          />
          <MenuItem
            name="Pizza Margarita"
            description="Sauce tomate, Fromage , légumes frais"
            sizes={[
              { size: "M", price: "300 DA" },
              { size: "L", price: "550 DA" },
              { size: "XL", price: "750 DA" },
            ]}
          />

          <MenuItem
            name="Pizza Carnivore"
            description="Sauce tomate,cheddar,fromage rouge, Poulet, Merguez, viande hachée"
            sizes={[
              { size: "M", price: "400 DA" },
              { size: "L", price: "600 DA" },
              { size: "XL", price: "1200 DA" },
            ]}
          />

          <MenuItem
            name="Pizza 3 Fromages"
            description="Sauce tomate,Cheddar,Fromage rouge,Fromage fondu "
            sizes={[
              { size: "M", price: "300 DA" },
              { size: "L", price: "550 DA" },
              { size: "XL", price: "750 DA" },
            ]}
          />
        </MenuSection>

        <div className="decorative-line my-4" />

        {/* Sandwiches Section */}
        <MenuSection title="Sandwiches" image="public/images/sandwich.png">
          <MenuItem
            name=" Sandwich Spécial Maison"
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
        <MenuSection title="Soufflés" image="public/images/souffle.png">
          <MenuItem
            name=" Soufflé spécial maison"
            description="Fromage, cheddar, gruyère, merguez, escalope"
            sizes={[
              { size: "L", price: "150 DA" },
              { size: "XL", price: "200 DA" },
            ]}
          />
          <MenuItem
            name=" Soufflé 3 Fromages"
            description="Fromage fondu, Cheddar, Gruyère"
            price="100 DA"
          />
        </MenuSection>

        <div className="decorative-line my-4" />

        {/* Boissons Chaudes Section */}
        <MenuSection title="Boissons Chaudes" image="public/images/coffee.png">
          <MenuItem name="Café Capsule" price="70 DA" />
          <MenuItem name="Best Coffee" price="50 DA" />
          <MenuItem name="Café classic" price="30 DA" />
          <MenuItem name="Café Crème" price="50 DA" />
          <MenuItem name="Infusion Thé" price="40 DA" />
          <MenuItem name="Thé Maison" price="40 DA" />
          <MenuItem name="Gingembre" price="40 DA" />
        </MenuSection>

        <MenuFooter />
      </div>
    </div>
  );
};

export default Index;
