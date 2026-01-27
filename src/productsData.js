export const GAZETTE = 'SO:3922(E), Dated: 12th September ,2024';

export const PRODUCTS = [
  { 
    brand: 'HI POWER', 
    specification: '(2) Potassium Humate 49% (Powder)', 
    category: 'Humic Acid and Fulvic Acid and their derivatives',
    crops: ['Paddy'], 
    dosage: ['One soil Application at 1 kg/ha'], 
    gazette: 'S.O. 3922(E), DATED 12-09-2024', 
    composition: [
      '(i) Humic Acid per cent. By weight minimum 21', 
      '(ii) pH (1% aqueous solution) 6.0-8.0'
    ] 
  },
];

export const SLUG_TO_BRAND = {
  'HI POWER': 'HI POWER',
  'HI%20POWER': 'HI POWER',
};

export function findProductBySlug(slug) {
  const decoded = decodeURIComponent(slug);
  const normalized = decoded.replace(/\+/g, ' ');
  const brand = SLUG_TO_BRAND[normalized] || SLUG_TO_BRAND[slug] || normalized;
  const found = PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase());
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand === brand) || PRODUCTS[0];
}