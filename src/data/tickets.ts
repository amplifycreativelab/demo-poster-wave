export interface Ticket {
    id: string;
    name: string;
    price: number;
    currency: string;
    status: 'available' | 'limited' | 'sold-out';
    benefits: string[];
}

export const tickets: Ticket[] = [
    {
        id: 't1',
        name: 'Early Bird',
        price: 45,
        currency: 'AUD',
        status: 'sold-out',
        benefits: ['Full Weekend Access', 'Digital Zine'],
    },
    {
        id: 't2',
        name: 'General Admission',
        price: 65,
        currency: 'AUD',
        status: 'available',
        benefits: ['Full Weekend Access', 'Physical Poster'],
    },
    {
        id: 't3',
        name: 'VIP / Artist Pass',
        price: 120,
        currency: 'AUD',
        status: 'limited',
        benefits: ['Backstage Access', 'Signed Poster', 'Free Drinks'],
    },
];
