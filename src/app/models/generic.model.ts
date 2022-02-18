export interface GenericModel {
    name: string;
    value: number;
}

export const LOCATIONS = [
  {realm:'R', name: 'All'},
  {realm:'O', name: 'Arthurs Rest'},
  {realm:'C', name: 'Black Market'},
  {realm:'R', name: 'Bridgewatch'},
  {realm:'C', name: 'Caerleon'},
  {realm:'R', name: 'Fortsterling'},
  {realm:'R', name: 'Lymhurst'},
  {realm:'R', name: 'Martlock'},
  {realm:'O', name: 'Merlyns Rest'},
  {realm:'O', name: 'Morganas Rest'},
  {realm:'R', name: 'Thetford'},
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
  { name: '0 enchanments', value: 0 },
  { name: '1 enchanment', value: 1 },
  { name: '2 enchanments', value:  2 },
  { name: '3 enchanments', value: 3 }
];

export const TIERS: GenericModel[] = [
  { name: 'All', value: 0 },
  { name: '(1) Beginner', value: 1 },
  { name: '(2) Novice', value: 2 },
  { name: '(3) Journeyman', value: 3 },
  { name: '(4) Adept', value: 4 },
  { name: '(5) Expert', value: 5 },
  { name: '(6) Master', value: 6 },
  { name: '(7) Grand Master', value: 7 },
  { name: '(8) Elder', value: 8 }
];