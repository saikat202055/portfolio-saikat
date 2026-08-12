export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    src: '/src/assets/gallery/tech-fest-2024.webp',
    alt: 'Speaking at DUET Tech Fest 2024 opening ceremony',
    aspect: 'landscape',
  },
  {
    id: 'g2',
    src: '/src/assets/gallery/ambassador-orientation.webp',
    alt: 'Leading a Student Ambassador orientation session',
    aspect: 'portrait',
  },
  {
    id: 'g3',
    src: '/src/assets/gallery/ieee-workshop.webp',
    alt: 'Facilitating an IEEE embedded systems workshop',
    aspect: 'square',
  },
  {
    id: 'g4',
    src: '/src/assets/gallery/hackathon-team.webp',
    alt: 'Team photo after winning a university hackathon',
    aspect: 'landscape',
  },
  {
    id: 'g5',
    src: '/src/assets/gallery/admission-fair.webp',
    alt: 'Representing DUET at a regional admission fair',
    aspect: 'portrait',
  },
  {
    id: 'g6',
    src: '/src/assets/gallery/lab-session.webp',
    alt: 'Working in the electronics lab on a circuit project',
    aspect: 'square',
  },
];
