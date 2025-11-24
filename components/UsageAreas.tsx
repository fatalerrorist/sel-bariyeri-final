import React, { useState } from "react";
import { Home, Factory, Waves, Store, ArrowRight, CheckCircle2, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const usageAreas = [
  {
    id: 1,
    title: "Müstakil Konutlar",
    description: "Garaj girişleri, bahçe kapıları ve bodrum kat girişleri için ideal koruma sağlar.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
    features: ["Garaj Girişleri", "Bahçe Kapıları", "Bodrum Katları"]
  },
  {
    id: 2,
    title: "Ticari İşletmeler",
    description: "Mağaza vitrinleri, depo girişleri ve alışveriş merkezi kapıları için profesyonel çözümler.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    features: ["Mağaza Vitrinleri", "Depo Girişleri", "AVM Kapıları"]
  },
  {
    id: 3,
    title: "Endüstriyel Tesisler",
    description: "Fabrika yükleme alanları, üretim tesisi girişleri ve teknik alanlar için dayanıklı sistemler.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    features: ["Fabrika Girişleri", "Yükleme Alanları", "Teknik Bölümler"]
  },
  {
    id: 4,
    title: "Nehir Yatakları",
    description: "Taşkın riski taşıyan dere kenarları ve nehir yatakları için set oluşturma çözümleri.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    features: ["Dere Kenarları", "Nehir Yatakları", "Taşkın Bölgeleri"]
  }
];

export const UsageAreas = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="kullanim-alanlari" className="min-h-screen bg-zinc-50 relative overflow-hidden flex items-center">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200 rounded-full blur-[128px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-[128px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-16">
        {/* Header Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-xl"
        >
          <div className="inline-block px-3 py-1 mb-4 border border-zinc-200 rounded-full bg-white text-zinc-500 text-xs font-bold tracking-widest uppercase shadow-sm">
            Kullanım Alanları
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
            Geniş Kullanım <br/>
            <span className="text-orange-600">Alanları</span>
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed">
            Sel bariyerlerimiz farklı yapı tiplerine ve ihtiyaçlara uygun olarak tasarlanmıştır.
          </p>
        </motion.div>

        {/* Main Content - Cards and Image aligned */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Cards */}
          <div className="w-full lg:w-5/12">
            <div className="space-y-4">
              {usageAreas.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl transition-all duration-500 border flex items-center gap-4 group relative overflow-hidden",
                    activeTab === index 
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-xl" 
                      : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-colors shrink-0",
                    activeTab === index ? "bg-orange-600 text-white" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-600"
                  )}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 z-10">
                    <h4 className={cn("font-bold text-base mb-0.5 transition-colors", activeTab === index ? "text-white" : "text-zinc-800")}>
                      {item.title}
                    </h4>
                    <p className={cn("text-xs line-clamp-1 transition-colors", activeTab === index ? "text-zinc-400" : "text-zinc-400")}>
                      {item.description}
                    </p>
                  </div>

                  {activeTab === index && (
                      <motion.div 
                        layoutId="active-arrow"
                        className="text-orange-500"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                          <ArrowRight className="w-5 h-5" />
                      </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Visual Gallery - Now aligned with cards */}
          <div className="w-full lg:w-7/12 relative">
            <AnimatePresence mode="wait">
                <motion.div 
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-zinc-200 relative bg-zinc-900"
                >
                    {/* Professional Image with Slow Zoom Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img
                        src={usageAreas[activeTab].image}
                        alt={usageAreas[activeTab].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 15, ease: "linear" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                    </div>

                    {/* Floating Info Card Overlay */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-white/50 z-40"
                    >
                        <div className="flex items-center gap-2 mb-2 text-orange-600 font-bold text-xs uppercase tracking-wider">
                            <ZoomIn className="w-3 h-3" />
                            Öne Çıkanlar
                        </div>
                        <ul className="space-y-1.5">
                            {usageAreas[activeTab].features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                                  <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
                                  <span>{feature}</span>
                              </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Bottom Title Overlay */}
                    <motion.div 
                        className="absolute bottom-6 left-6 right-6 z-40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="flex items-end justify-between gap-4">
                            <div>
                                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-2 text-white shadow-lg">
                                    {React.createElement(usageAreas[activeTab].icon, { className: "w-5 h-5" })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {usageAreas[activeTab].title}
                                </h3>
                                <p className="text-white/70 text-xs max-w-xs">
                                    {usageAreas[activeTab].description}
                                </p>
                            </div>
                            <a 
                                href="#iletisim" 
                                className="bg-white hover:bg-zinc-50 text-zinc-900 px-5 py-2.5 rounded-lg font-bold text-xs shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 shrink-0"
                            >
                                Teklif İste <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Decorative Elements behind gallery */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-orange-500/10 rounded-[2.5rem] border-dashed" />
          </div>

        </div>
      </div>
    </section>
  );
};
