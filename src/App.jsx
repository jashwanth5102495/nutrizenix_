import React, { useState, useEffect } from 'react';
import StarBorder from './StarBorder.jsx';
import './StarBorder.css';

export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const oldSlug = '/Humus%20Carbon%20%2B%2B';
    const newSlug = '/HUMICID';
    if (window.location.pathname === oldSlug) {
      window.history.replaceState(null, '', newSlug);
    }
    document.title = 'HUMICID — Product Information';
  }, []);


  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Intro overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
          <video
            className="max-h-screen w-auto"
            src="/intro take 4.mp4"
            autoPlay
            muted
            playsInline
            controls
            onEnded={() => setShowIntro(false)}
          />
          <button
            className="absolute top-4 right-4 px-4 py-2 rounded-md bg-white/10 border border-white/30 text-white hover:bg-white/20"
            onClick={() => setShowIntro(false)}
          >
            Skip
          </button>
        </div>
      )}

      <img className="absolute inset-0 -z-30 w-full h-full object-cover" src="/try1.png" alt="Background" />

      {/* top spacer */}
      <div className="h-4 sm:h-6" />

      {/* Header box with logo video */}
      <header className="pt-0 sm:pt-0 mt-6 sm:mt-8 pb-6 text-center select-none">
        <div className="mx-auto w-[340px] sm:w-[440px] h-[160px] sm:h-[200px] rounded-2xl bg-white/8 border border-white/20 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
          <video src="/logo.mp4" className="w-full h-full object-cover rounded-2xl bg-white/8 backdrop-blur-md ring-1 ring-white/20 shadow-inner" autoPlay muted loop playsInline />
        </div>
        <div className="mt-2 text-xs sm:text-sm text-[#cfc191] tracking-wide">Bio‑Stimulant Registration Details</div>
      </header>

      {/* Main panel */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* Product name card with manufacturer/marketing info */}
        <section className="mx-auto max-w-3xl">
          <div className="relative rounded-2xl bg-white/8 border border-white/20 backdrop-blur-md p-4 sm:p-6 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e8d8a6]/20 text-[#e8d8a6] mr-4 shadow-inner">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="flex-1">
              <div className="text-[#d9c98f] text-xs sm:text-sm">Product Name:</div>
              <div className="text-white text-xl sm:text-2xl font-semibold tracking-wide">HUMICID</div>
            </div>
          </div>
        </section>

        {/* Info grid with StarBorder */}
        <section className="mt-8 grid grid-cols-1 gap-4">
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">📰</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Gazette Notification:</div>
                <div className="text-base sm:text-lg">SO:3922(E), Dated:12-09-2024</div>
              </div>
            </div>
          </StarBorder>

          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">⚗️</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Title of Bio Stimulant:</div>
                <div className="text-base sm:text-lg">Humic Acid 5% (powder)</div>
              </div>
            </div>
          </StarBorder>

          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🧪</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Composition</div>
                <ul className="mt-1 space-y-1 list-disc pl-5 text-sm sm:text-base">
                  <li>Humic Acid 5% (powder)</li>
                  <li>Humic Acid 5% (powder)</li>
                  <li>Polys affection</li>
                  <li>PlsC irailicion</li>
                </ul>
              </div>
            </div>
          </StarBorder>

          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🌶️</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Crops:</div>
                <div className="text-base sm:text-lg">Chilli Pepper</div>
              </div>
            </div>
          </StarBorder>

          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🧴</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Dosage:</div>
                <div className="text-base sm:text-lg">three foliar application at 0.5 g/L</div>
              </div>
            </div>
          </StarBorder>
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🏭</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Manufactured By:</div>
                <div className="text-base sm:text-lg">SUSTHIRA BIO ORGANICS LLP</div>
                <div className="mt-2 text-[#d9c98f] text-sm">Marketing By:</div>
                <div className="text-base sm:text-lg">N CHEM SCIENCES</div>
              </div>
            </div>
          </StarBorder>
        </section>
      </main>
    </div>
  );
}
