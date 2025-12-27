export function getPath(path: string): string {
    const base = import.meta.env.BASE_URL;

    // If no base or base is just slash, return path as is (ensuring it starts with /)
    if (!base || base === '/') {
        return path.startsWith('/') ? path : `/${path}`;
    }

    // Ensure base ends with slash
    const cleanBase = base.endsWith('/') ? base : `${base}/`;

    // Clean path: remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Concatenate
    return `${cleanBase}${cleanPath}`;
}
