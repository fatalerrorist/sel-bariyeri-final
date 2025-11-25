import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Droplets, Hammer, Lock } from "lucide-react";

export const Features = () => {
  return (
    <section
      id="urunumuz"
      className="min-h-screen w-full bg-zinc-50/50 relative overflow-hidden flex flex-col items-center justify-center py-6 md:py-6"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Benzersiz Teknoloji
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-6">
            Neden <span className="text-orange-600 relative">
              Sel Bariyeri?
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Geleneksel yöntemleri unutun. Modern, güvenli ve estetik sel koruma sistemi ile tanışın.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 max-w-7xl mx-auto md:h-[800px]">

          {/* Card 1: Üstün Dayanıklılık (2x2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:border-orange-200 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-8 text-orange-600 shadow-inner">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 group-hover:text-orange-600 transition-colors">
                Üstün Dayanıklılık
              </h3>
              <p className="text-lg text-zinc-600 max-w-md leading-relaxed">
                340 Litreye kadar su baskısına dayanıklıdır. Şiddetli sellere karşı tam dayanıklılık.
              </p>
            </div>

            <div className="relative mt-8 h-48 w-full bg-zinc-50 rounded-2xl border border-zinc-100 overflow-hidden flex items-center justify-center group-hover:bg-orange-50/30 transition-colors">
              {/* Abstract Shield/Layer Animation */}
              <div className="relative w-32 h-40">
                <motion.div
                  initial={{ opacity: 0.5, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute inset-0 bg-zinc-200 rounded-b-full border-4 border-zinc-300"
                />
                <motion.div
                  initial={{ opacity: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 bg-orange-100/50 rounded-b-full border-4 border-orange-200 scale-90 translate-y-2"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <ShieldCheck className="w-16 h-16 text-orange-500 drop-shadow-lg" />
                </motion.div>
              </div>

              {/* Impact Waves */}
              <motion.div
                className="absolute right-10 top-1/2 -translate-y-1/2 w-2 h-20 bg-blue-400/20 rounded-full blur-sm"
                animate={{ x: [-20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </div>
          </motion.div>

          {/* Card 2: Hızlı Kurulum (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 group hover:shadow-lg hover:border-orange-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-bold text-zinc-900">5</span>
                <span className="text-2xl font-medium text-zinc-500">dk</span>
              </div>
              <p className="text-zinc-600 font-medium mt-2">Ortalama Kurulum Süresi</p>
            </div>

            <div className="w-full h-2 bg-zinc-100 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full bg-orange-500"
              />
            </div>
          </motion.div>

          {/* Card 3: %100 Sızdırmazlık (1x2) - Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-start-3 md:row-start-2 md:row-span-2 bg-gradient-to-b from-blue-50 to-white rounded-[2rem] p-8 shadow-sm border border-blue-100 group hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            {/* Water Animation Background */}
            <div className="absolute inset-0 z-0 opacity-30">
              <svg className="absolute bottom-0 w-full h-1/2 text-blue-200 fill-current" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0 50 Q 25 60 50 50 T 100 50 V 100 H 0 Z"
                  animate={{ d: ["M0 50 Q 25 60 50 50 T 100 50 V 100 H 0 Z", "M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-700 transition-colors">%100 Sızdırmazlık</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                Büyük kalıplar ile tek parça halinde üretilen bariyerler, aynı zamanda gelen su akışını en iyi şekilde yönlendirir.
              </p>
            </div>

            <div className="mt-auto relative z-10 flex justify-center">
              <div className="w-24 h-32 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 flex flex-col items-center justify-end p-2 shadow-sm">
                <div className="w-full bg-blue-100 rounded-lg h-full relative overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 w-full bg-blue-500"
                    initial={{ height: "10%" }}
                    whileInView={{ height: "85%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <div className="absolute top-0 w-full h-full flex items-center justify-center">
                    <div className="w-full h-0.5 bg-red-500/50 absolute top-[15%]" />
                    <span className="text-[10px] text-red-500 font-bold absolute top-[8%] right-1">MAX</span>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400 mt-2 font-mono">PRESSURE</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Kolay Montaj (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-start-1 md:row-start-3 bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 group hover:shadow-lg hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-4 group-hover:rotate-12 transition-transform">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Kolay Montaj</h3>
              <p className="text-sm text-zinc-600">
                Özel alet gerektirmeyen, geçmeli kilit sistemi.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <div className="h-0.5 flex-1 bg-zinc-200" />
              <div className="h-2 w-2 rounded-full bg-zinc-300" />
              <div className="h-0.5 flex-1 bg-zinc-200" />
              <div className="h-2 w-2 rounded-full bg-zinc-300" />
            </div>
          </motion.div>

          {/* Card 5: Güvenli Depolama (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-start-2 md:row-start-3 bg-zinc-900 rounded-[2rem] p-8 shadow-sm border border-zinc-800 group hover:shadow-xl transition-all duration-300 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lock className="w-24 h-24 text-zinc-500" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-4 text-orange-500">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Güvenli Depolama</h3>
                <p className="text-zinc-400 text-sm">
                  İstiflenebilir paneller ile minimum yer kaplar.
                </p>
              </div>

              <div className="flex flex-col-reverse gap-1 mt-4 items-start">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ width: "60%", opacity: 0.5 }}
                    whileHover={{ width: "80%", opacity: 1 }}
                    className="h-2 bg-zinc-700 rounded-full"
                    style={{ width: `${60 + i * 10}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};