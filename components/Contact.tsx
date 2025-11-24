import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        alert("Mesajınız alındı! En kısa sürede döneceğiz.");
        setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="iletisim" className="py-24 bg-zinc-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
                Ücretsiz keşif talebi oluşturmak veya teknik bilgi almak için formu doldurun. Uzman ekibimiz 24 saat içinde size dönüş yapsın.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {/* Contact Info Cards */}
           <div className="lg:col-span-1 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4">
                 <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-bold text-zinc-900">Telefon</h4>
                    <p className="text-zinc-500 text-sm mt-1">+90 (212) 555 00 00</p>
                    <p className="text-zinc-400 text-xs mt-1">Hafta içi: 09:00 - 18:00</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4">
                 <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-bold text-zinc-900">E-Posta</h4>
                    <p className="text-zinc-500 text-sm mt-1">info@selbariyeri.com.tr</p>
                    <p className="text-zinc-400 text-xs mt-1">Teklif: satis@selbariyeri.com.tr</p>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4">
                 <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="font-bold text-zinc-900">Merkez Ofis</h4>
                    <p className="text-zinc-500 text-sm mt-1">
                        Organize Sanayi Bölgesi, 4. Cadde No:12<br />
                        Başakşehir / İstanbul
                    </p>
                 </div>
              </div>
           </div>

           {/* Form */}
           <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-zinc-100">
                 <h3 className="text-2xl font-bold mb-6">Hemen Teklif Al</h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700">Ad Soyad</label>
                        <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={e => setFormState({...formState, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-700">Telefon</label>
                        <input 
                            required
                            type="tel" 
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                            placeholder="0555 555 55 55"
                            value={formState.phone}
                            onChange={e => setFormState({...formState, phone: e.target.value})}
                        />
                    </div>
                 </div>

                 <div className="space-y-2 mb-6">
                    <label className="text-sm font-medium text-zinc-700">E-Posta</label>
                    <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        placeholder="ornek@sirket.com"
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                 </div>

                 <div className="space-y-2 mb-8">
                    <label className="text-sm font-medium text-zinc-700">Mesajınız</label>
                    <textarea 
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                        placeholder="Proje detayları veya keşif adresi..."
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                    />
                 </div>

                 <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                    {isSubmitting ? 'Gönderiliyor...' : (
                        <>
                            Gönder
                            <Send className="w-5 h-5" />
                        </>
                    )}
                 </button>
              </form>
           </div>
        </div>

      </div>
    </section>
  );
};