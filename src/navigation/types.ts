// Navigation Types Configuration

export type NavigationItem = {
    id: string;
    title: string;
    url: string;
    icon?: string;
};

export type NavigationConfig = {
    items: NavigationItem[];
};

export const navigationConfig: NavigationConfig = {
    items: [
        { id: 'home', title: 'Home', url: '/' },
        { id: 'about', title: 'About', url: '/about' },
        { id: 'contact', title: 'Contact', url: '/contact' },
    ],
};