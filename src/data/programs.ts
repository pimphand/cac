export interface Program {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  focus: string[];
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    id: 'toddler',
    name: 'Toddler Program',
    ageRange: 'Usia 1–3 tahun',
    description:
      'Program untuk anak usia dini yang fokus pada eksplorasi sensorik, perkembangan bahasa, koordinasi motorik, dan kemandirian awal dalam lingkungan yang aman dan hangat.',
    focus: ['Eksplorasi sensorik', 'Perkembangan bahasa', 'Koordinasi motorik', 'Kemandirian awal'],
    image: '/images/program-toddler.svg',
    imageAlt: 'Anak toddler bermain dengan material Montessori',
  },
  {
    id: 'preschool',
    name: 'Preschool Program',
    ageRange: 'Usia 3–6 tahun',
    description:
      'Program untuk anak prasekolah yang mengembangkan practical life, sensorial, bahasa, matematika awal, serta eksplorasi lingkungan sesuai ritme masing-masing anak.',
    focus: ['Practical life', 'Sensorial', 'Bahasa', 'Matematika awal', 'Eksplorasi lingkungan'],
    image: '/images/program-preschool.svg',
    imageAlt: 'Anak preschool belajar dengan material Montessori',
  },
  {
    id: 'individualized',
    name: 'Individualized Learning',
    ageRange: 'Sesuai kesiapan anak',
    description:
      'Pendekatan belajar yang memperhatikan minat, kesiapan, dan ritme perkembangan masing-masing anak, sehingga setiap anak dapat tumbuh dengan percaya diri.',
    focus: ['Minat anak', 'Kesiapan belajar', 'Ritme individu', 'Pendampingan personal'],
    image: '/images/program-individual.svg',
    imageAlt: 'Pendidik mendampingi anak belajar',
  },
];
