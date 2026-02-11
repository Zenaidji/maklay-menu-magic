import headerImg from "../../../public/header.png";
import { motion } from "framer-motion";

const MenuHeader = () => {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-4 md:gap-8 px-4 md:px-8 py-6 bg-black/90 shadow-md text-center md:text-left">
      {/* Logo responsive */}
      <div className="flex-shrink-0 rounded-full border-4 border-gold p-2 bg-black/30">
        <img
          src={headerImg}
          alt="Chez Maklay"
          className="h-28 w-28 sm:h-36 sm:w-36 md:h-[180px] md:w-[180px] object-contain rounded-full"
        />
      </div>

      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-gold drop-shadow-sm">
          Chez Maklay
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/80 font-light tracking-wide">
          Fastfood • Pizzeria • Sandwichs
        </p>
      </motion.div>
    </header>
  );
};

export default MenuHeader;
