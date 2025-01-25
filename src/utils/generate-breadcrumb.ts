export function generateBreadcrumb(route: string) {
    const segments = route.replace(/^\//, '').split('/')
    return segments.map(segment => segment.replace(/-/g, ' '));
}
