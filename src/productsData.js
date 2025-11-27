export const GAZETTE = 'SO:3922(E), Dated:12-09-2024';

export const PRODUCTS = [
  {
    brand: 'HUMICID',
    specification: 'Humic Acid 5% (Powder)',
    dosage: ['Three Foliar Application at 0.5 g/l'],
    crops: ['Chilli Pepper'],
    gazette: GAZETTE,
  },
  {
    brand: 'HUMICID +',
    specification: 'Potassium Humate 49% (Powder)',
    dosage: ['One Soil Application at 1 kg/ha'],
    crops: ['Paddy'],
    gazette: GAZETTE,
  },
  {
    brand: 'HUMICID ++',
    specification: 'Humic and Fulvic Acid 25.05% (Liquid)',
    dosage: ['Five Equal Soil Drench application at 10 l/ha'],
    crops: ['Tomato'],
    gazette: GAZETTE,
  },
  {
    brand: 'SEA EXTRACT',
    specification: 'Ascophyllum nodosum 15% (Liquid)',
    dosage: ['Two Foliar applications at 1.5 l/ha'],
    crops: ['Green Gram'],
    gazette: GAZETTE,
  },
  {
    brand: 'BOT EXTRACT',
    specification: 'Spirulina 10% (Liquid)',
    dosage: ['Two Foliar applications Sprays at 750 ml/ha'],
    crops: ['Chilli', 'Tomato'],
    gazette: GAZETTE,
  },
  {
    brand: 'OR MIX (NUTRIENT MOBILIZER)',
    specification: 'Mixture of Seaweed extract: Humic, Fulvic Acid, Amino Acids and Vitamins (Liquid)',
    dosage: [
      'Two Foliar Applications at 2 l/ha',
    ],
    crops: ['Cotton'],
    gazette: GAZETTE,
  },
  {
    brand: 'N CHEM (PRO-H)',
    specification: 'Bacteria biomass hydrolysate (Amino Acids 2%) Liquid',
    dosage: [
      'Three Foliar Applications at 3.75 l/ha',
      'Three Foliar Applications at 2.5 l/ha',
      'Three Foliar Applications at 2.5 l/ha',
      'Four Foliar Sprays at 1.25 l/ha to 2.0 l/ha Depending on canopy size',
    ],
    crops: ['Chilli', 'Soyabean', 'Cotton', 'Grape'],
    gazette: GAZETTE,
  },
  {
    brand: 'N CHEM (Micro - Cell)',
    specification: 'Microbial Cell (Methylococcus): 1*10^9 cfu/g (Powder)',
    dosage: [
      'Three Applications (One Seedling dip and two foliar applications) at 40 g/ha',
      'Two foliar applications at 40 g/ha',
    ],
    crops: ['Paddy', 'Maize'],
    gazette: GAZETTE,
  },
  {
    brand: 'N CHEM (Micro - Con)',
    specification: 'Microbial Consortium 1*10^7 cfu/g',
    dosage: ['Single Soil Application just before planting at 7.5 kg/ha as basal dose'],
    crops: ['Onion'],
    gazette: GAZETTE,
  },
];

export const SLUG_TO_BRAND = {
  'HUMICID': 'HUMICID',
  'HUMICID+': 'HUMICID +',
  'HUMICID%2B': 'HUMICID +',
  'HUMICID++': 'HUMICID ++',
  'HUMICID%2B%2B': 'HUMICID ++',
  'SEA EXTRACT': 'SEA EXTRACT',
  'BOT EXTRACT': 'BOT EXTRACT',
  'OR MIX (NUTRIENT MOBILIZER)': 'OR MIX (NUTRIENT MOBILIZER)',
  'N CHEM (PRO-H)': 'N CHEM (PRO-H)',
  'N CHEM (Micro - Cell)': 'N CHEM (Micro - Cell)',
  'N CHEM (Micro - Con)': 'N CHEM (Micro - Con)',
};

export function findProductBySlug(slug) {
  const decoded = decodeURIComponent(slug);
  const brand = SLUG_TO_BRAND[decoded] || SLUG_TO_BRAND[slug] || decoded;
  // case-insensitive match for robustness
  const found = PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase());
  return found || PRODUCTS.find(p => p.brand === 'HUMICID');
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand === brand);
}