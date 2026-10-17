export type NavLink = { label: string; href: string }
export type NavItem = NavLink & { children?: NavLink[] }

export const navItems: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#vision' },
 /* { label: 'Advisory Board', href: '#jury' },*/
  {
    label: 'Initiatives',
    href: '#events',
    children: [
      { label: 'Kala Khoj', href: '#kala-khoj' },
      { label: 'Art 2 Start', href: '#art-2-start' },
    ],
    },
  { label: 'Gallery', href: '/kalamanch-v2/gallery/' },
  { label: 'Contact Us', href: '#join' },
]

/** Category colour keys shared by jury cards, programmes and opportunities. */
export type Tone = 'blue' | 'orange' | 'purple' | 'green' | 'yellow' | 'peach'

export type JuryMember = {
  /** Placeholder record — replace with confirmed jury profiles. */
  name: string
  expertise: string
  designation: string
  bio: string
  image: string
  imageAlt: string
  isPlaceholder: boolean
  tone: Tone
}

export const jury: JuryMember[] = [
  {
    name: 'Person 1',
    expertise: 'Visual Arts',
    designation: 'Advisory Committee Member',
    bio: "Biography to be added once this committee member's profile is confirmed.",
    image: '/images/artist-painter.png',
    imageAlt: "A painter's studio corner with an unfinished canvas in soft window light",
    isPlaceholder: true,
    tone: 'blue',
  },
  {
    name: 'Person 2',
    expertise: 'Craft & Material Practice',
    designation: 'Advisory Committee Member',
    bio: "Biography to be added once this committee member's profile is confirmed.",
    image: '/images/artist-sculptor.png',
    imageAlt: 'An unfinished stone sculpture on a workshop turntable with chisels',
    isPlaceholder: true,
    tone: 'orange',
  },
  {
    name: 'Person 3',
    expertise: 'Painting & Sculpture',
    designation: 'Advisory Committee Member',
    bio: "Biography to be added once this committee member's profile is confirmed.",
    image: '/images/artist-dancer.png',
    imageAlt: "An artist's hands preparing a work in a sunlit studio",
    isPlaceholder: true,
    tone: 'purple',
  },
  {
    name: 'Person 4',
    expertise: 'Heritage & Craft',
    designation: 'Advisory Committee Member',
    bio: "Biography to be added once this committee member's profile is confirmed.",
    image: '/images/artist-musician.png',
    imageAlt: 'A creative practice in progress with tools and materials nearby',
    isPlaceholder: true,
    tone: 'green',
  },
]

export const artForms = [
  'Painting',
  'Sculpture',
  'Drawing',
  'Printmaking',
  'Textiles',
  'Pottery',
  'Photography',
  'Craft',
  'Art & Ideas',
]

export type JoinPath = { title: string; body: string; tone: Tone }

export const joinPaths: JoinPath[] = [
  {
    title: 'For Artists',
    body: 'Showcase your practice and explore opportunities with Kala Manch.',
    tone: 'blue',
  },
  {
    title: 'For Cultural Practitioners',
    body: 'Bring traditions, knowledge and stories into new conversations.',
    tone: 'orange',
  },
  {
    title: 'For Collaborators',
    body: 'Build cultural projects, experiences and exchanges with us.',
    tone: 'purple',
  },
]

/** Replace with the Kala Manch WhatsApp number in international format, digits only. */
export const whatsappNumber = '919999999999'
export const whatsappMessage = 'Hello Kala Manch, I would like to know more.'

export type KhojStep = { title: string; body: string }

export const kalaKhojSteps: KhojStep[] = [
  {
    title: 'Digital open call',
    body: 'Announced on the Kala Manch website and MSF Instagram, with WhatsApp outreach through partner networks.',
  },
  {
    title: 'Mainstream amplification',
    body: 'Arts and culture publications, national and regional media, and artist stories that drive participation.',
  },
  {
    title: 'Institutional outreach',
    body: 'Art colleges, academies, nonprofits and community organisations across all 12 landscapes.',
  },
  {
    title: 'Evaluation & selection',
    body: '12 criteria inspired by the 12 Jyotirlingas — one artist chosen from each landscape.',
  },
]

export type Landscape = { name: string; state: string; image: string; alt: string }

export const landscapes: Landscape[] = [
  { name: 'Somnath', state: 'Gujarat', image: '/landscapes/somnath.png', alt: 'Folk painting of a patterned blue deer beneath a tree of life on a whitewashed wall' },
  { name: 'Nageshwar', state: 'Gujarat', image: '/landscapes/nageshwar.png', alt: 'Red mirror-work Kutch embroidery hanging outside a mud home' },
  { name: 'Bhimashankar', state: 'Maharashtra', image: '/landscapes/bhimashankar.png', alt: 'Warli painting of dancing figures in white on a red-brown wall' },
  { name: 'Trimbakeshwar', state: 'Maharashtra', image: '/landscapes/trimbakeshwar.png', alt: 'Hand-painted yellow and red folk masks on a lime-plaster wall' },
  { name: 'Grishneshwar', state: 'Maharashtra', image: '/landscapes/grishneshwar.png', alt: 'Silk textile with peacock motifs being woven on a wooden handloom' },
  { name: 'Mahakaleshwar', state: 'Madhya Pradesh', image: '/landscapes/mahakaleshwar.png', alt: 'Gond painting of a tree of life with birds and deer on teal' },
  { name: 'Omkareshwar', state: 'Madhya Pradesh', image: '/landscapes/omkareshwar.png', alt: 'Bhil dot painting of a tortoise on a vivid red background' },
  { name: 'Kedarnath', state: 'Uttarakhand', image: '/landscapes/kedarnath.png', alt: 'White Aipan mandala drawn on a brick-red ochre surface' },
  { name: 'Kashi Vishwanath', state: 'Uttar Pradesh', image: '/landscapes/kashi-vishwanath.png', alt: 'Pink meenakari enamel elephant resting on Banarasi silk brocade' },
  { name: 'Vaidyanath', state: 'Jharkhand', image: '/landscapes/vaidyanath.png', alt: 'Sohrai mural of a tree and women painted in earth pigments' },
  { name: 'Mallikarjuna', state: 'Andhra Pradesh', image: '/landscapes/mallikarjuna.png', alt: 'Artisan drawing Kalamkari motifs on cotton with a bamboo pen' },
  { name: 'Rameshwaram', state: 'Tamil Nadu', image: '/landscapes/rameshwaram.png', alt: 'Detail of a Tanjore painting with embossed gold leaf and inlaid stones' },
]

export const khojUncovers = [
  'Emerging contemporary visual artists',
  'Regional and traditional art practices',
  'Artists connected to colleges, collectives and community networks',
  'Lesser-known materials and techniques',
  'Underrepresented local and cultural narratives',
]

export type CityGroup = { state: string; cities: string[] }

export const artToStartCities: CityGroup[] = [
  { state: 'Rajasthan', cities: ['Jaipur', 'Udaipur'] },
  { state: 'Gujarat', cities: ['Vadodara', 'Surat'] },
  { state: 'Punjab', cities: ['Amritsar', 'Ludhiana'] },
  { state: 'West Bengal', cities: ['Siliguri', 'Durgapur'] },
]
