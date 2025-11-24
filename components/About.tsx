import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="hakkimizda" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-orange-500/30 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase">
              Hakkımızda
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Türkiye'nin Sel Korumasında <br/>
              <span className="text-orange-500">Çözüm Ortağı</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Sel Bariyeri olarak, iklim değişikliğinin getirdiği risklere karşı en modern mühendislik çözümlerini sunuyoruz. Yılların verdiği tecrübe ile geliştirdiğimiz modüler bariyer sistemleri, hem bireysel hem de endüstriyel alanlarda %100 güvenlik sağlamak üzere tasarlanmıştır.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Yerli Üretim', '7/24 Teknik Destek', 'Patentli Tasarım', 'ISO 9001 Sertifikalı'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.div 
              className="mt-10 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl font-bold text-white mb-1">10.000+ m²</div>
              <div className="text-zinc-400 text-sm">Korunan Alan</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-700">
               <img 
                 src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2574&auto=format&fit=crop" 
                 alt="Factory Engineer" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Overlay Content */}
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg">
                        15
                     </div>
                     <div>
                        <div className="font-bold text-white">Yıllık Tecrübe</div>
                        <div className="text-xs text-zinc-400">Sektördeki Liderlik</div>
                     </div>
                  </div>
               </div>
             </div>

             {/* Decoration */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zinc-800 rounded-xl -z-10" />
             <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-orange-500/20 rounded-xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};