import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, DoorOpen, Store, ZoomIn, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcases = [
    {
      id: 0,
      title: "Garaj Girişleri",
      desc: "Geniş açıklıklı garaj kapılarınız için özel olarak üretilen, yüksek basınca dayanıklı bariyer sistemi.",
      icon: Car,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2576&auto=format&fit=crop",
      features: ["Yüksek Basınç Dayanımı", "Hızlı Kurulum", "Araç Geçişine Uygun"]
    },
    {
      id: 1,
      title: "Konut Kapı Önleri",
      desc: "Ev girişlerinizde estetik görünümü bozmadan %100 sızdırmazlık sağlayan modüler sistem.",
      icon: DoorOpen,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
      features: ["Estetik Tasarım", "%100 Sızdırmazlık", "Kolay Depolama"]
    },
    {
      id: 2,
      title: "Ticari Vitrinler",
      desc: "Mağaza ve dükkan vitrinleri için geniş açıklıklarda bile esnemeyen, güvenli istiflenebilir paneller.",
      icon: Store,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2574&auto=format&fit=crop",
      features: ["Geniş Açıklık Desteği", "Vitrin Görünürlüğü", "Güçlü Yapı"]
    }
  ];

  return (
    <section id="urun-galerisi" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-200 rounded-full blur-[128px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-[128px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Controls */}
          <div className="w-full lg:w-5/12 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 mb-4 border border-zinc-200 rounded-full bg-white text-zinc-500 text-xs font-bold tracking-widest uppercase shadow-sm">
                Kullanım Alanları
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                Estetik ve Güçlü <br/>
                <span className="text-orange-600">Koruma Çözümleri</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                Her yapı tipine özel olarak tasarlanan modüler bariyerlerimiz, mimari estetiğinizi bozmadan maksimum güvenlik sağlar.
              </p>
            </motion.div>

            <div className="space-y-4">
              {showcases.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl transition-all duration-500 border flex items-center gap-5 group relative overflow-hidden",
                    activeTab === index 
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-xl" 
                      : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-xl transition-colors shrink-0",
                    activeTab === index ? "bg-orange-600 text-white" : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-600"
                  )}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 z-10">
                    <h4 className={cn("font-bold text-lg mb-1 transition-colors", activeTab === index ? "text-white" : "text-zinc-800")}>
                      {item.title}
                    </h4>
                    <p className={cn("text-sm line-clamp-2 transition-colors", activeTab === index ? "text-zinc-400" : "text-zinc-400")}>
                      {item.desc}
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

          {/* Right Side: Visual Gallery */}
          <div className="w-full lg:w-7/12 min-h-[600px] relative">
            <AnimatePresence mode="wait">
                <motion.div 
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-zinc-200 relative bg-zinc-900"
                >
                    {/* Professional Image with Slow Zoom Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.img
                        src={showcases[activeTab].image}
                        alt={showcases[activeTab].title}
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
                        className="absolute top-10 left-10 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 z-40 max-w-xs"
                    >
                        <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold text-xs uppercase tracking-wider">
                            <ZoomIn className="w-4 h-4" />
                            Öne Çıkanlar
                        </div>
                        <ul className="space-y-3">
                            {showcases[activeTab].features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm font-medium text-zinc-700">
                                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
                                  <span>{feature}</span>
                              </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CTA Overlay */}
                    <motion.div 
                        className="absolute bottom-10 right-10 z-40"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a 
                            href="#iletisim" 
                            className="bg-white hover:bg-zinc-50 text-zinc-900 px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all transform hover:scale-105 flex items-center gap-3"
                        >
                            Teklif İste <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Decorative Elements behind gallery */}
            <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-orange-500/10 rounded-[3rem] border-dashed" />
          </div>

        </div>
      </div>
    </section>
  );
};
