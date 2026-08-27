export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'Vision', href: '#vision' },
  { label: 'Jury', href: '#jury' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Collaborate', href: '#join' },
]

export type JuryMember = {
  /** Placeholder record — replace with confirmed jury profiles. */
  name: string
  expertise: string
  designation: string
  bio: string
  image: string
  imageAlt: string
  isPlaceholder: boolean
}

export const jury: JuryMember[] = [
  {
    name: 'Jury Member',
    expertise: 'Visual Arts',
    designation: 'Jury Member',
    bio: "Biography to be added once this jury member's profile is confirmed.",
    image: '/images/artist-painter.png',
    imageAlt: "A painter's studio corner with an unfinished canvas in soft window light",
    isPlaceholder: true,
  },
  {
    name: 'Jury Member',
    expertise: 'Craft & Material Practice',
    designation: 'Jury Member',
    bio: "Biography to be added once this jury member's profile is confirmed.",
    image: '/images/artist-sculptor.png',
    imageAlt: 'An unfinished stone sculpture on a workshop turntable with chisels',
    isPlaceholder: true,
  },
  {
    name: 'Jury Member',
    expertise: 'Performing Arts',
    designation: 'Jury Member',
    bio: "Biography to be added once this jury member's profile is confirmed.",
    image: '/images/artist-dancer.png',
    imageAlt: "A dancer's feet and ankle bells mid-step on a rehearsal floor",
    isPlaceholder: true,
  },
  {
    name: 'Jury Member',
    expertise: 'Music & Sound',
    designation: 'Jury Member',
    bio: "Biography to be added once this jury member's profile is confirmed.",
    image: '/images/artist-musician.png',
    imageAlt: 'A sitar resting against a plaster wall, hands tuning the pegs',
    isPlaceholder: true,
  },
]

export type Programme = { number: string; title: string; body: string }

export const programmes: Programme[] = [
  {
    number: '01',
    title: 'Exhibitions',
    body: 'Curated presentations of visual art, giving finished and in-progress work room to be seen closely.',
  },
  {
    number: '02',
    title: 'Artist Work',
    body: "The practice and process behind an artist's work, presented as it takes shape rather than only as a finished piece.",
  },
  {
    number: '03',
    title: 'Artist Collaborations',
    body: 'Joint projects between artists, institutions and communities, built around a shared cultural idea.',
  },
  {
    number: '04',
    title: 'Workshops',
    body: 'Hands-on sessions where technique and craft are taught directly, practitioner to participant.',
  },
  {
    number: '05',
    title: 'Cultural Conversations',
    body: 'Dialogue-led sessions with artists and cultural thinkers on practice, context and meaning.',
  },
]

export type JoinPath = { title: string; body: string }

export const joinPaths: JoinPath[] = [
  {
    title: 'For Artists',
    body: 'Showcase your practice and explore opportunities with Kalamanch.',
  },
  {
    title: 'For Cultural Practitioners',
    body: 'Bring traditions, knowledge and stories into new conversations.',
  },
  {
    title: 'For Collaborators',
    body: 'Build cultural projects, experiences and exchanges with us.',
  },
]
