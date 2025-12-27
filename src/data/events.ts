import type { ImageMetadata } from 'astro';
import poster1 from '../assets/poster-1.webp';
import poster2 from '../assets/poster-2.webp';
import poster3 from '../assets/poster-3.webp';

export interface Event {
    id: string;
    slug: string;
    title: string;
    date: string;
    venue: string;
    city: string;
    posterImage: ImageMetadata;
}

export const events: Event[] = [
    {
        id: 'e1',
        slug: 'neon-dreams-launch',
        title: 'Neon Dreams Launch',
        date: '2025-11-14T20:00:00',
        venue: 'The Warehouse',
        city: 'Studio Row',
        posterImage: poster1,
    },
    {
        id: 'e2',
        slug: 'analog-noise-night',
        title: 'Analog Noise Night',
        date: '2025-11-15T19:00:00',
        venue: 'Riso Studio B',
        city: 'Central District',
        posterImage: poster2,
    },
    {
        id: 'e3',
        slug: 'closing-party',
        title: 'Festival Closing Party',
        date: '2025-11-16T18:00:00',
        venue: 'Laneway Bar',
        city: 'Harbor District',
        posterImage: poster3,
    },
];
