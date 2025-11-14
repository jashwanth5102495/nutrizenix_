import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText.jsx';

function getPageFromPath(pathname) {
  const p = pathname.toLowerCase();
  if (p.startsWith('/chilli-pepper')) return 'paddy';
  return 'paddy';
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath(window.location.pathname));
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);
  const introVideoRef = useRef(null);

  // Ensure the background video starts immediately when ready
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // must be true for autoplay
    const attemptPlay = () => {
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {});
      }
    };
    if (v.readyState >= 2) {
      attemptPlay();
    } else {
      v.addEventListener('canplay', attemptPlay, { once: true });
    }
  }, []);

  // Autoplay intro video overlay on first load
  useEffect(() => {
    const v = introVideoRef.current;
    if (!v) return;
    v.muted = true; // required for autoplay on most browsers
    const attemptPlay = () => {
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {});
      }
    };
    if (v.readyState >= 2) {
      attemptPlay();
    } else {
      v.addEventListener('canplay', attemptPlay, { once: true });
    }
  }, []);

  // Sync document title and URL with current page
  useEffect(() => {
    document.title = 'Chilli Pepper';
    const desired = '/chilli-pepper';
    if (window.location.pathname !== desired) {
      window.history.replaceState({}, '', desired);
    }
  }, [page]);

  // Listen to browser back/forward to update page state
  useEffect(() => {
    const onPop = () => setPage(getPageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-16 sm:pt-20 pb-8 sm:pb-10">
      {/* Video background */}
      <video
        ref={videoRef}
        className="fixed inset-0 -z-40 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={() => console.warn('Background video failed to load or play')}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      {/* Gradient backdrop above video for subtle tint */}
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-20 pointer-events-none"></div>

      {/* Intro video overlay (plays once on load) */}
      <motion.div
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: showIntro ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ pointerEvents: showIntro ? 'auto' : 'none' }}
      >
        <video
          ref={introVideoRef}
          className="w-full h-full object-contain"
          src="/intro%20take%204.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setShowIntro(false)}
        />
      </motion.div>


      {/* Glassmorphism main panel */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/25 border border-white/40 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-5 sm:p-6">

        {/* Page title (outside the white box) */}
         <div className="text-center mb-2">
           <div className="text-3xl sm:text-4xl font-extrabold tracking-wide">
             <ShinyText text="Nutreefy" speed={3} />
           </div>
         </div>

        {/* Logo video header */}
        <div className="rounded-2xl bg-white border border-white/60 px-4 py-6 sm:px-6 sm:py-8 text-gray-900">
          <div className="flex items-center justify-center">
            <video src="/logo.mp4" className="w-64 sm:w-80 h-auto object-contain rounded-md" autoPlay loop muted playsInline />
          </div>
        </div>

        {page === 'paddy' ? (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {/* Made by badge card */}
              <div className="rounded-xl bg-white/25 border border-white/50 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">Made by</div>
                <div className="text-lg">Jasnav It Solutions</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">S.O.3922(E), Dated 12-9-2024</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">Humic acid 5% (powder)</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                <ul className="text-sm mt-1 space-y-1 list-disc pl-5">
                  <li>Humic Acid percent by weight minimum: 5</li>
                  <li>pH (1% aqueous solution): 4.0–5.0</li>
                  <li>Specific Gravity: 1.0</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">Chilli pepper</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">Three foliar application at 0.5g/ltr</div>
              </div>
            </div>
          </motion.div>
        ) : page === 'groundnut' ? (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">S.O.3922(E), Dated 12-9-2024</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">Humates and Fulvates – 22% (Liquid)</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                <ul className="text-sm mt-1 space-y-1 list-disc pl-5">
                  <li>(i) Total water soluble humates and fulvates: percent weight by volume, minimum: 22</li>
                  <li>(ii) pH (1:5 aqueous solution): 9.0 (min)</li>
                  <li>(iii) Specific gravity: 1.05</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">Ground Nut</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">Two soil applications at 1.25L/ha</div>
              </div>
            </div>
          </motion.div>
        ) : page === 'gg' ? (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">S.O.3922</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">Humates</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                <ul className="text-sm mt-1 space-y-1 list-disc pl-5">
                  <li>Humic Acid percent by weight minimum: 10.0</li>
                  <li>Fulvic Acid percent by weight minimum: 2.5</li>
                  <li>pH (10% aqueous solution): 12–14</li>
                  <li>Specific Gravity: 1.0–1.20</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">Green Gram</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">Two soil application at 5L/ha</div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">S.O.3922(E), Dated 12-9-2024</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">Kappaphycus alvarezii 24% (Liquid)</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                <ul className="text-sm mt-1 space-y-1 list-disc pl-5">
                  <li>(i) Total carbohydrate per cent by weight, minimum: 7.5</li>
                  <li>(ii) D-Galactose – 4-O- Sulphate per cent by weight, minimum: 6.0</li>
                  <li>(iii) pH (minimum) (1:2 aqueous solution): 3.0 – 5.0</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">Cucumber</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">One foliar application at 2 ml/l</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
