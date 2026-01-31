import { Phone, MapPin, Clock } from "lucide-react";

const MenuFooter = () => {
  return (
    <footer className="mt-12 pt-8 border-t-2 border-primary/20 text-center">
      <p className="font-display text-xl text-charcoal mb-2">
        Merci de votre visite !
      </p>
      <p className="text-muted-foreground text-sm mb-6">
        Nous vous souhaitons un excellent appétit.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span>+213 XXX XXX XXX</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Adresse du restaurant</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>10h - 23h</span>
        </div>
      </div>
      
      <p className="text-xs text-muted-foreground mt-6 opacity-70">
        Les prix sont indiqués en Dinars Algériens (DA)
      </p>
    </footer>
  );
};

export default MenuFooter;
