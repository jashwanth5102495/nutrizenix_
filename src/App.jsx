import React, { useState, useEffect } from 'react';
import StarBorder from './StarBorder.jsx';
import './StarBorder.css';
import { PRODUCTS, findProductBySlug } from './productsData.js';

export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const oldSlug = '/HUMICID';
    const newSlug = '/SP%20ROOT%20POWER';
    const current = window.location.pathname;
    if (current === oldSlug || current === '/' || current === '') {
      window.history.replaceState(null, '', newSlug);
    }
    const rawPath = window.location.pathname.replace(/^\//, '');
    const found = findProductBySlug(rawPath);
    setProduct(found);
    const desiredSlug = `/${encodeURIComponent(found.brand)}`;
    if (window.location.pathname !== desiredSlug) {
      window.history.replaceState(null, '', desiredSlug);
    }
    document.title = `${found.brand} — Product Information`;
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
            preload="auto"
            poster="/new.jpeg"
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

      <img className="fixed inset-0 -z-30 w-full h-full object-cover" src="/try1.png" alt="Background" loading="eager" fetchPriority="high" decoding="async" />

      {/* top spacer */}
      <div className="h-4 sm:h-6" />

      {/* Header box with logo video */}
      <header className="pt-0 sm:pt-0 mt-6 sm:mt-8 pb-6 text-center select-none">
        <div className="mx-auto w-[320px] sm:w-[500px] max-w-[92vw] h-[200px] sm:h-[260px] rounded-2xl bg-white/8 border border-white/20 backdrop-blur-md overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            <img src="/lo.png" className="w-full h-full object-contain rounded-2xl bg-white/8 backdrop-blur-md ring-1 ring-white/20 shadow-inner" alt="Logo" loading="eager" decoding="async" />
          </div>
        <div className="mt-2 text-xs sm:text-sm text-[#cfc191] tracking-wide">Bio‑Stimulant Registration Details</div>
      </header>

      {/* Main panel */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 pb-16">
        {/* Gazette Notification FIRST */}
        <section className="mt-2">
          <div className="rounded-xl border border-white/25 bg-black/20 p-4 sm:p-5 flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3">
              <span className="text-lg">📰</span>
            </div>
            <div className="flex-1">
              <div className="text-white text-sm">Gazette Notification:</div>
              <div className="text-white text-base sm:text-lg">{product?.gazette || 'SO:3922(E), Dated: 12th September ,2024'}</div>
            </div>
          </div>
        </section>

        {/* Title of Bio Stimulant SECOND */}
        <section className="mt-6">
          <div className="rounded-xl border border-white/25 bg-black/20 p-4 sm:p-5 flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3">
              <span className="text-lg">⚗️</span>
            </div>
            <div className="flex-1">
              <div className="text-white text-sm">Tittle of Bio Stimulant:</div>
              <div className="text-white text-base sm:text-lg">{product?.specification || ''}</div>
            </div>
          </div>
        </section>

        {/* Product Name THIRD */}
        <section className="mx-auto max-w-3xl mt-6">
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="relative rounded-2xl bg-white/8 border border-white/20 backdrop-blur-md p-4 sm:p-6 flex items-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#e8d8a6]/20 text-[#e8d8a6] mr-4 shadow-inner">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-xs sm:text-sm">Product Name:</div>
                <div className="text-white text-xl sm:text-2xl font-semibold tracking-wide">{product?.displayName || product?.brand || 'HUMICID'}</div>
              </div>
            </div>
          </StarBorder>
        </section>

        {/* Info grid with StarBorder */}
        <section className="mt-8 grid grid-cols-1 gap-4">
          {/* Gazette moved to top */}


          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">🧪</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Composition</div>
                {(product?.composition || []).length ? (
                  <ul className="mt-1 text-sm sm:text-base text-white list-none pl-0 space-y-1">
                    {(product?.composition || []).map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-1 text-sm sm:text-base text-white"></div>
                )}
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
                <div className="text-base sm:text-lg">{(product?.crops || []).join(', ')}</div>
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
                <div className="text-base sm:text-lg">{(product?.dosage || []).join(' | ')}</div>
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
                <div className="text-white/90 text-sm sm:text-base">SP Agrotech Ltd, Plot No.G34, Katphal, M.I.D.C., Baramati, Pune, Maharashtra - 413102</div>

                <div className="mt-3 text-[#d9c98f] text-sm">Marketed By:</div>
                <div className="text-white/90 text-sm sm:text-base">CTS NO. 1120/4 complex lndi Road appo :Neelkanteshwar Kalyan Mantap Vijayapur -586101</div>
              </div>
            </div>
          </StarBorder>
          <StarBorder as="div" className="w-full" color="cyan" speed="5s" thickness={2}>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#e8d8a6]/25 text-[#e8d8a6] mr-3 shadow-inner">
                <span className="text-lg">📞</span>
              </div>
              <div className="flex-1">
                <div className="text-[#d9c98f] text-sm">Customer Care</div>
                <div className="text-white/90 text-sm sm:text-base">Maharashtra customer care no. 9129613434</div>
                <div className="text-white/90 text-sm sm:text-base">Karnataka customer care no. 8446998943</div>
              </div>
            </div>
          </StarBorder>
        </section>
      </main>
    </div>
  );
}
