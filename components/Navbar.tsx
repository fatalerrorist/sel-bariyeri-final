import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ürünümüz", href: "#urunumuz" },
    { name: "Kullanım Alanları", href: "#kullanim-alanlari" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex items-center",
          isScrolled
            ? "bg-orange-600/95 backdrop-blur-md text-white shadow-lg py-2 border-b border-orange-700 h-16"
            : "bg-transparent text-white py-4 h-20"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between w-full h-full border-b border-white/10 lg:border-none">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div
                className={cn(
                  "w-10 h-10 flex items-center justify-center transition-colors duration-500 overflow-hidden bg-transparent",
                )}
              >
                <img 
                  src="/logo.png" 
                  alt="Sel Bariyeri Logo" 
                  className="w-full h-full object-contain invert brightness-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight">SEL</span>
                <span className="font-light text-xs leading-none tracking-[0.2em] opacity-90">BARİYERİ</span>
              </div>
            </a>
          </div>

          {/* Center Menu Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 tracking-wide relative group",
                  isScrolled ? "text-white/90 hover:text-white" : "text-white/90 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full bg-white",
                )} />
              </a>
            ))}
          </div>

          {/* Right Buttons Section */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#iletisim"
              className={cn(
                "px-5 py-2 rounded-md text-xs font-bold transition-all duration-300 shadow-sm uppercase tracking-wider hover:-translate-y-0.5",
                isScrolled
                  ? "bg-white text-orange-700 hover:bg-gray-50"
                  : "bg-white text-orange-700 hover:bg-orange-50"
              )}
            >
              Ücretsiz Keşif
            </a>
            <a
              href="#iletisim"
              className={cn(
                "px-5 py-2 rounded-md text-xs font-bold transition-all duration-300 shadow-sm uppercase tracking-wider hover:-translate-y-0.5",
                isScrolled
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "bg-orange-600 text-white hover:bg-orange-700 border border-white/10"
              )}
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 transition-colors hover:bg-white/10 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-zinc-900 flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center space-y-8 text-2xl font-medium">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:text-orange-500 transition-colors tracking-wide"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4 mt-8 w-full px-10"
              >
                 <a
                  href="#iletisim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-white text-zinc-900 px-8 py-3 rounded text-sm font-bold shadow-sm uppercase tracking-wider text-center hover:bg-gray-200 transition-colors"
                >
                  Ücretsiz Keşif
                </a>
                <a
                  href="#iletisim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-orange-600 text-white px-8 py-3 rounded text-sm font-bold shadow-sm uppercase tracking-wider text-center hover:bg-orange-700 transition-colors"
                >
                  Teklif Al
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
