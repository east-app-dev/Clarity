import React, { useState, useEffect } from 'react';
import { Logo } from '@/app/components/Logo';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { PrivacyPolicy, TermsOfService } from '@/app/components/LegalContent';
import { ArrowRight, Apple, CheckCircle2, ChevronRight, X, Menu, Globe, Shield, FileText } from 'lucide-react';

const APP_STORE_URL = "https://apps.apple.com/us/app/clarity-declutter-your-day/id6756941382";

const SCREENSHOTS = [
  {
    title: "Simply declutter your day",
    subtitle: "Focus on what matters most with a clean, intentional interface.",
    image: "figma:asset/c68fb1d1161db183f83831fc6203f7c652b56306.png"
  },
  {
    title: "Daily Planner",
    subtitle: "View your day in a precise Timeline and stay organized.",
    image: "figma:asset/55d91e66d6d167ddd50e4649edb9d716e6a2cda1.png"
  },
  {
    title: "Calendar",
    subtitle: "Review, Edit, and Plan your upcoming weeks with ease.",
    image: "figma:asset/af90dc7f2dea79765ecaf24d86912bcc3ddb61bd.png"
  },
  {
    title: "To-Do Lists",
    subtitle: "Auto-generated and organized lists based on your notes.",
    image: "figma:asset/b2c26632d1670941a6ff5b32c7b683cecc269eed.png"
  }
];

export default function App() {
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const AppStoreButton = ({ className = "" }: { className?: string }) => (
    <a 
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 bg-[#3D3333] text-[#FFFDF5] px-8 py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#3D3333]/20 ${className}`}
    >
      <Apple size={28} fill="currentColor" />
      <div className="text-left">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 leading-none">Download on the</p>
        <p className="text-xl font-black leading-none mt-1 tracking-tight">App Store</p>
      </div>
    </a>
  );

  if (view !== 'home') {
    return (
      <div className="min-h-screen bg-[#FFFDF5] text-[#3D3333]">
        <nav className="p-8 flex justify-between items-center border-b border-[#3D3333]/5">
          <button onClick={() => setView('home')} className="hover:opacity-70 transition-opacity">
            <Logo size="sm" />
          </button>
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 font-black uppercase tracking-widest text-sm"
          >
            <X size={20} /> Close
          </button>
        </nav>
        <main className="max-w-3xl mx-auto px-8 py-24">
          {view === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
        </main>
        <footer className="p-8 border-t border-[#3D3333]/5 text-center">
          <button onClick={() => setView('home')} className="font-black text-sm opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">
            Back to Home
          </button>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#3D3333] selection:bg-[#3D3333] selection:text-[#FFFDF5]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-8 py-6 flex justify-between items-center bg-[#FFFDF5]/80 backdrop-blur-xl border-b border-[#3D3333]/5">
        <Logo size="sm" />
        
        <div className="hidden md:flex gap-10 items-center text-sm font-bold uppercase tracking-[0.15em]">
          <a href="#features" className="hover:opacity-100 opacity-60 transition-opacity">Features</a>
          <a href="#about" className="hover:opacity-100 opacity-60 transition-opacity">About</a>
          <a 
            href={APP_STORE_URL} 
            className="bg-[#3D3333] text-[#FFFDF5] px-6 py-2.5 rounded-full hover:shadow-lg transition-all"
          >
            Get Clarity
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#FFFDF5] p-8 flex flex-col gap-8 md:hidden">
          <div className="flex justify-between items-center">
            <Logo size="sm" />
            <button onClick={() => setIsMenuOpen(false)}><X /></button>
          </div>
          <div className="flex flex-col gap-6 mt-12 text-2xl font-black">
             <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
             <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
             <a href={APP_STORE_URL} target="_blank" className="flex items-center gap-2">App Store <ArrowRight /></a>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-40 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#3D3333]/5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Now Available Worldwide</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9]">
                Simply <br />declutter <br />your day.
              </h1>
              
              <p className="text-2xl leading-relaxed opacity-60 max-w-lg font-medium">
                Clarity helps you regain focus by organizing your thoughts into a precise, visual timeline.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <AppStoreButton />
                <div className="flex items-center gap-4 px-6 opacity-40">
                  <Globe size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest leading-none">iOS & iPadOS</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3D3333]/5 rounded-full blur-3xl -z-10" />
              
              {/* Main Phone Frame */}
              <div className="relative mx-auto w-[320px] h-[660px] md:w-[380px] md:h-[780px] bg-[#3D3333] rounded-[4rem] p-3 shadow-[0_50px_100px_-20px_rgba(61,51,51,0.3)] border-[8px] border-[#3D3333]">
                <div className="w-full h-full rounded-[3.2rem] overflow-hidden bg-[#FFFDF5]">
                  <ImageWithFallback 
                    src="figma:asset/c68fb1d1161db183f83831fc6203f7c652b56306.png" 
                    alt="Clarity App Main Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Dynamic Island Area */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#3D3333] rounded-full" />
              </div>

              {/* Secondary Phone Frame */}
              <div className="absolute -bottom-10 -right-10 md:-right-20 w-[240px] h-[480px] bg-[#3D3333] rounded-[3rem] p-2 shadow-2xl border-[6px] border-[#3D3333] hidden sm:block rotate-6 hover:rotate-0 transition-transform duration-700">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#FFFDF5]">
                  <ImageWithFallback 
                    src="figma:asset/af90dc7f2dea79765ecaf24d86912bcc3ddb61bd.png" 
                    alt="Clarity Calendar Screen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-40 bg-[#3D3333] text-[#FFFDF5] px-8 rounded-[4rem] mx-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFFDF5]/10 flex items-center justify-center">
                   <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black">Daily Planner</h3>
                <p className="opacity-60 text-lg leading-relaxed">
                  View your day in a precise timeline. Review, edit, and plan with absolute clarity.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFFDF5]/10 flex items-center justify-center">
                   <Shield size={32} />
                </div>
                <h3 className="text-2xl font-black">Focus Boost</h3>
                <p className="opacity-60 text-lg leading-relaxed">
                  Minimize distractions with built-in functions designed to help specific tasks.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFFDF5]/10 flex items-center justify-center">
                   <Menu size={32} />
                </div>
                <h3 className="text-2xl font-black">To-Do Lists</h3>
                <p className="opacity-60 text-lg leading-relaxed">
                  Auto-generated and organized lists based on your personal notes and workflow.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFFDF5]/10 flex items-center justify-center">
                   <ArrowRight size={32} />
                </div>
                <h3 className="text-2xl font-black">AI Suggestion</h3>
                <p className="opacity-60 text-lg leading-relaxed">
                  Intelligent suggestions that help you structure your day based on your habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto space-y-32">
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">Designed for Focus.</h2>
              <p className="text-xl opacity-60 max-w-2xl mx-auto">
                No noise, no clutter. Just the tools you need to stay on track and accomplish your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {SCREENSHOTS.slice(0, 2).map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] rounded-[3.5rem] bg-[#3D3333]/5 p-12 flex flex-col items-center justify-between overflow-hidden relative border-2 border-[#3D3333]/5">
                    <div className="text-center space-y-3 z-10">
                      <h4 className="text-3xl font-black tracking-tight">{item.title}</h4>
                      <p className="opacity-60 font-medium">{item.subtitle}</p>
                    </div>
                    <div className="w-[280px] h-[580px] translate-y-20 group-hover:translate-y-10 transition-transform duration-700">
                       <ImageWithFallback src={item.image} alt={item.title} className="w-full h-full object-contain drop-shadow-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-8 text-center bg-[#FFFDF5] relative">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex justify-center">
              <Logo size="lg" showText={false} />
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-[-0.04em]">
              Ready to declutter?
            </h2>
            <p className="text-xl opacity-60 font-medium max-w-xl mx-auto">
              Join thousands of users who have found their focus with Clarity. Available now for free.
            </p>
            <div className="flex flex-col items-center gap-6">
              <AppStoreButton />
              <p className="text-sm font-bold opacity-30 uppercase tracking-widest">Supports iOS 16.0+</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-[#3D3333]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <Logo size="md" />
              <p className="text-xl opacity-40 max-w-sm font-medium">
                DayBee Helps you regain control over your time and focus on what truly matters.
              </p>
            </div>
            
            <div className="space-y-6">
              <h5 className="font-black uppercase tracking-widest text-xs opacity-40">Company</h5>
              <div className="flex flex-col gap-4 font-black">
                <button onClick={() => setView('privacy')} className="text-left hover:opacity-100 opacity-60 transition-opacity">Privacy Policy</button>
                <button onClick={() => setView('terms')} className="text-left hover:opacity-100 opacity-60 transition-opacity">Terms of Service</button>
                <a href="mailto:daybeeapp-privacy@web.de" className="hover:opacity-100 opacity-60 transition-opacity">Contact Support</a>
              </div>
            </div>

            <div className="space-y-6 text-right">
              <h5 className="font-black uppercase tracking-widest text-xs opacity-40">Get App</h5>
              <div className="flex flex-col items-end gap-4">
                 <a href={APP_STORE_URL} target="_blank" className="hover:scale-105 transition-transform">
                   <Apple size={32} />
                 </a>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-[#3D3333]/5 flex flex-col md:flex-row justify-between gap-6">
            <p className="text-sm font-bold opacity-20 uppercase tracking-widest">© 2026 Esat Karabiyik. All rights reserved.</p>
            <div className="flex gap-8 opacity-20 text-sm font-bold uppercase tracking-widest">
              <span>Made with Clarity</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
