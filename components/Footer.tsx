import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ShieldAlert } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <ShieldAlert className="w-8 h-8 text-orange-600" />
                <span className="text-xl font-bold tracking-tight">SEL BARİYERİ</span>
             </div>
             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Modern mühendislik çözümleri ile yaşam alanlarınızı su baskınlarına karşı koruyoruz.
             </p>
             <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
             </div>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Hızlı Erişim</h4>
             <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Ana Sayfa</a></li>
                <li><a href="#urunumuz" className="hover:text-orange-500 transition-colors">Ürünler</a></li>
                <li><a href="#referanslarimiz" className="hover:text-orange-500 transition-colors">Referanslar</a></li>
                <li><a href="#hakkimizda" className="hover:text-orange-500 transition-colors">Hakkımızda</a></li>
                <li><a href="#iletisim" className="hover:text-orange-500 transition-colors">İletişim</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Yasal</h4>
             <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Kullanım Koşulları</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Gizlilik Politikası</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">KVKK Aydınlatma</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Çerez Politikası</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6">Bülten</h4>
             <p className="text-zinc-500 text-sm mb-4">Gelişmelerden haberdar olmak için e-posta listemize katılın.</p>
             <div className="flex gap-2">
                <input 
                    type="email" 
                    placeholder="E-posta adresiniz" 
                    className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:border-orange-600"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-700 transition-colors">
                    Kayıt
                </button>
             </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">© 2024 Sel Bariyeri. Tüm hakları saklıdır.</p>
            <p className="text-zinc-700 text-xs flex items-center gap-2">
                Designed with <span className="text-red-900">♥</span> for Safety
            </p>
        </div>
      </div>
    </footer>
  );
};