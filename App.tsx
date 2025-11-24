import React from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { ThreeDViewer } from './components/ThreeDViewer';
import { Features } from './components/Features';
import { UsageAreas } from './components/UsageAreas';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ThreeDViewer />
        <Features />
        <UsageAreas />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
