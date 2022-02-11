export interface GenericModel {
    name: string;
    value: number;
}

export const LOCATIONS = [
  'All',
  'Arthurs Rest',
  'Black Market',
  'Bridgewatch',
  'Caerleon',
  'Fortsterling',
  'Lymhurst',
  'Martlock',
  'Morganas Rest',
  'Thetford',
]

export const QUALITIES: GenericModel[] = [
  { name: 'All', value: 0 },
  { name: 'Normal', value: 1 },
  { name: 'Good', value: 2 },
  { name: 'Outstanding', value: 3 },
  { name: 'Excellent', value: 4 },
  { name: 'Masterpiece', value: 5 },
];

export const ENCHANTMENTS: GenericModel[] = [
  { name: 'All', value: 4 },
  { name: 'No enchanments', value: 0 },
  { name: 'One enchanment', value: 1 },
  { name: 'Two enchanments', value:  2 },
  { name: 'Three enchanments', value: 3 }
];

export const TIERS: GenericModel[] = [
  { name: 'All', value: 0 },
  { name: 'Beginner', value: 1 },
  { name: 'Novice', value: 2 },
  { name: 'Journeyman', value: 3 },
  { name: 'Adept', value: 4 },
  { name: 'Expert', value: 5 },
  { name: 'Master', value: 6 },
  { name: 'Grand Master', value: 7 },
  { name: 'Elder', value: 8 }
];