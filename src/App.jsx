import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ShinyText from './ShinyText.jsx';

function decodeProductFromPath(pathname) {
  try {
    const raw = decodeURIComponent(pathname || '/');
    return raw.startsWith('/') ? raw.slice(1) : raw;
  } catch {
    return '';
  }
}

export default function App() {
  const [product, setProduct] = useState(() => {
    const name = decodeProductFromPath(window.location.pathname);
    return name && name.length > 0 ? name : 'Humus Carbon ++';
  });
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);
  const introVideoRef = useRef(null);

  // Product catalog (for reference only; navigation uses URL)
  const products = [
    'Humus Carbon ++',
    'Humizyme-PR',
    'Black Gold-PR (L)',
    'Humizyme – PR (L)',
    'Black Gold – PR',
    'Sea Vite Gold – PR',
    'Sea Gold – PR',
    'Magic – PR',
    'Hi Grow – PR',
    'Srushti – PR',
    'Jadoo Ultra – PR',
  ];

  const productData = {
    'Humus Carbon ++': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Humic Acid 5% (powder)',
      composition: [
        '1. Humic Acid precent by weight minimum : 5',
        '2. PH (1% aq solution) : 4.0 – 5.0',
        '3. specific Gravity : 1.0',
      ],
      crops: 'Chilli Pepper',
      dosage: 'three foliar application at 0.5 g/L',
    },
    'Humizyme-PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Humic Acid 21% (powder)',
      composition: [
        '1. Humic Acid precent by weight minimum : 21',
        '2. PH (1% aq solution) : 6.0 – 8.0',
      ],
      crops: 'Paddy',
      dosage: 'One soil application at 1kg/ha',
    },
    'Black Gold-PR (L)': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Total water soluble humates and fulvates percent. Weight by volume, minimum 22%',
      composition: [
        '1. Total water soluble humates and fulvates percent. Weight by volume, minimum 22%',
        '2. PH (1.5 aqueous solution) : 9.0 (Min)',
        '3. Specific Gravity : 1.05',
      ],
      crops: 'Ground Nut',
      dosage: 'Two soil application at 1.25L/ha',
    },
    'Humizyme – PR (L)': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Humic Acid 10% (powder)',
      composition: [
        '1. Humic Acid precent by weight minimum : 10',
        '2. Fulvic Acid Percent. By weight minimum : 2.5',
        '3. PH (10% aqueous solution) : 12 – 14',
        '4. Specific Gravity : 1.0 – 1.20',
      ],
      crops: 'Green Gram',
      dosage: 'Two Soil application at 5 l/ha',
    },
    'Black Gold – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Humic Acid 51% (powder)',
      composition: [
        '1. Humic Acid precent by weight minimum : 51',
        '2. Fulvic Acid Percent. By weight minimum : 10',
        '3. PH (1% aqueous solution) : 10 - 12',
        '4.Bulk Density (25 degree Celsius) g/cc : 0.5 – 0.70',
      ],
      crops: 'Green Gram',
      dosage: 'Two Soil application at 1.5 kg/ha',
    },
    'Sea Vite Gold – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Alginic Acid percent by weight, minimum : 1.5',
      composition: [
        '1. Alginic Acid percent by weight, minimum : 1.5',
        '2.Mannitol percent by  weight, minimum : 1.0',
        '3. PH (10% aqueous solution) : 4.7 +- 1.0',
        '4.Specific gravity : 1.0 – 1.1',
        '5. Total organic carbon per cent. By weight, minimum  : 5',
      ],
      crops: 'Green Gram',
      dosage: 'Two folia application at 1.5 l/ha.',
    },
    'Sea Gold – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Alginic Acid percent by weight, minimum : 0.2',
      composition: [
        '1. Alginic Acid percent by weight, minimum : 0.2',
        '2. PH (1:2 aqueous solution) : 6.0 – 8.5',
        '3. Bulk Density (g/cc) : 0.95 – 1.1',
      ],
      crops: 'paddy',
      dosage: 'one soil application at 12.5 kg/ha.',
    },
    'Magic – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Total carbohydrate percent by weight minimum : 7.5',
      composition: [
        '1. Total carbohydrate percent by weight minimum : 7.5',
        '2.D-Galactose -4-O-Sulphate Percent by weight minimum : 6.0',
        '3. pH (Minimum) (1:2 Aqueous Solution) : 3.0 - 5.0',
      ],
      crops: 'Cucumber',
      dosage: 'one foliar application at 2ml/l.',
    },
    'Hi Grow – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Alginic Acid per cent.by weight minimum : 2.0',
      composition: [
        '1. Alginic Acid per cent.by weight minimum : 2.0',
        '2. pH (1:2 aqueous solution) 8 - 10',
        '3. Organic matter (dry mass basis) per cent. by weight, minimum : 20',
      ],
      crops: 'Paddy',
      dosage: 'one foliar application at 625ml/ha.',
    },
    'Hi Grow - PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Alginic Acid per cent.by weight minimum : 2.0',
      composition: [
        '1. Alginic Acid per cent.by weight minimum : 2.0',
        '2. pH (1:2 aqueous solution) 8 - 10',
        '3. Organic matter (dry mass basis) per cent. by weight, minimum : 20',
      ],
      crops: 'Paddy',
      dosage: 'one foliar application at 625ml/ha.',
    },
    'Srushti – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Vasicine, minimum : 5 ppm',
      composition: [
        '1. Vasicine, minimum : 5 ppm',
        '2. Seaweed extract, percent. by weight minimum : 5',
        '3. pH (1% aqueous solution) : 7.0 – 8.0',
      ],
      crops: 'Potato',
      dosage: 'Single soil application at 10 kg/ha.',
    },
    'Srushti - PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Vasicine, minimum : 5 ppm',
      composition: [
        '1. Vasicine, minimum : 5 ppm',
        '2. Seaweed extract, percent. by weight minimum : 5',
        '3. pH (1% aqueous solution) : 7.0 – 8.0',
      ],
      crops: 'Potato',
      dosage: 'Single soil application at 10 kg/ha.',
    },
    'Jadoo Ultra – PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Humic Acid percent. by weight, minimum : 30',
      composition: [
        '1. Humic Acid percent. by weight, minimum : 30',
        '2. Amino Acid (Glycine) percent. by weight, minimum : 7',
        '3. Myoinositol percent. by weight, minimum : 2',
        '4. Vitamin C percent by weight, minimum : 12.0',
        '5. Vitamin E percent by weight, minimum : 0.2',
        '6. pH (1% aqueous solution) : 5.0 – 6.5',
        '7. Total organic carbon percent by weight, minimum : 25',
      ],
      crops: 'Okra',
      dosage: 'Two soil applications at 250g/ha.',
    },
    'Jadoo Ultra - PR': {
      gazette: 'S.O.3922(E), Dated 12-9-2024',
      title: 'Humic Acid percent. by weight, minimum : 30',
      composition: [
        '1. Humic Acid percent. by weight, minimum : 30',
        '2. Amino Acid (Glycine) percent. by weight, minimum : 7',
        '3. Myoinositol percent. by weight, minimum : 2',
        '4. Vitamin C percent by weight, minimum : 12.0',
        '5. Vitamin E percent by weight, minimum : 0.2',
        '6. pH (1% aqueous solution) : 5.0 – 6.5',
        '7. Total organic carbon percent by weight, minimum : 25',
      ],
      crops: 'Okra',
      dosage: 'Two soil applications at 250g/ha.',
    },
  };

  const content = productData[product];

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

  // Sync document title and URL with current product
  useEffect(() => {
    document.title = product;
    const desired = `/${encodeURIComponent(product)}`;
    if (window.location.pathname !== desired) {
      window.history.replaceState({}, '', desired);
    }
  }, [product]);

  // Listen to browser back/forward to update product state
  useEffect(() => {
    const onPop = () => {
      const name = decodeProductFromPath(window.location.pathname);
      setProduct(name && name.length > 0 ? name : 'Humus Carbon ++');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-16 sm:pt-20 pb-8 sm:pb-10">
      {/* Video background */}
      <video
        ref={videoRef}
        className="fixed inset-0 -z-40 w-full h-full object-cover pointer-events-none"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={() => console.warn('Background video failed to load or play')}
      />
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

        {/* Product page is driven by URL; selector removed */}

          {/* Details template for selected product (values intentionally left empty) */}
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {/* Made by badge card */}
              <div className="rounded-xl bg-white/25 border border-white/50 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">Made by</div>
                <div className="text-lg">Jasnav It Solutions</div>
              </div>


              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">{content?.gazette ?? '\u00A0'}</div>
              </div>

              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">{content?.title ?? '\u00A0'}</div>
              </div>

              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                {content?.composition ? (
                  <ul className="list-disc pl-4 text-sm mt-1">
                    {content.composition.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm mt-1 min-h-[24px]">&nbsp;</div>
                )}
              </div>

              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">{content?.crops ?? '\u00A0'}</div>
              </div>

              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">{content?.dosage ?? '\u00A0'}</div>
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
}
