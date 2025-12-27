export interface Artist {
    name: string;
    genre: string;
    day: 'Friday' | 'Saturday' | 'Sunday';
    priority: 1 | 2 | 3;
}

export const artists: Artist[] = [
    { name: 'Velvet Static', genre: 'Post-Punk', day: 'Friday', priority: 1 },
    { name: 'Neon Glitch', genre: 'Synthwave', day: 'Friday', priority: 2 },
    { name: 'Echo Chamber', genre: 'Shoegaze', day: 'Saturday', priority: 1 },
    { name: 'Raw Ink', genre: 'Garage Rock', day: 'Saturday', priority: 2 },
    { name: 'Paper Cuts', genre: 'Indie Pop', day: 'Sunday', priority: 1 },
    { name: 'The Layers', genre: 'Alternative', day: 'Sunday', priority: 3 },
    { name: 'Grainy Days', genre: 'Lo-Fi', day: 'Saturday', priority: 3 },
    { name: 'CMYK Killer', genre: 'Electronic', day: 'Friday', priority: 2 },
];
