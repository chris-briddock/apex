import type React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home Page with navigation to all CSS test pages
 */
export const HomePage: React.FC = () => {
    const categories = [
        {
            title: 'Layout',
            description: 'Display, position, and layout utilities',
            routes: [
                { path: '/display', label: 'Display', description: 'block, flex, grid, hidden, etc.' },
                { path: '/position', label: 'Position', description: 'static, relative, absolute, fixed, sticky' },
                { path: '/spacing', label: 'Spacing', description: 'Margin and padding utilities' },
                { path: '/sizing', label: 'Sizing', description: 'Width, height, min/max sizing' },
            ]
        },
        {
            title: 'Flexbox & Grid',
            description: 'Flexible box and grid layout systems',
            routes: [
                { path: '/flexbox', label: 'Flexbox', description: 'Direction, wrap, justify, align' },
                { path: '/grid', label: 'Grid', description: 'Columns, spans, gaps' },
            ]
        },
        {
            title: 'Typography',
            description: 'Font and text styling',
            routes: [
                { path: '/typography', label: 'Typography', description: 'Size, weight, alignment, transforms' },
            ]
        },
        {
            title: 'Visual',
            description: 'Colors, borders, and effects',
            routes: [
                { path: '/colors', label: 'Colors', description: 'Background and text colors' },
                { path: '/borders', label: 'Borders', description: 'Radius, width, style, color' },
                { path: '/effects', label: 'Effects', description: 'Shadows, opacity, z-index' },
                { path: '/overflow-visibility', label: 'Overflow & Visibility', description: 'Overflow, visibility, cursor' },
            ]
        }
    ];

    return (
        <div className="page-container">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">ApexCSS E2E Test Suite</h1>
                    <p className="text-lg text-gray-600">
                        Comprehensive visual testing for all CSS utility classes.
                        Select a category below to view and test specific utilities.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <div key={category.title} className="bg-white rounded-lg shadow-md p-6 border">
                            <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                            <p className="text-gray-600 mb-4">{category.description}</p>
                            <nav className="space-y-2">
                                {category.routes.map((route) => (
                                    <Link
                                        key={route.path}
                                        to={route.path}
                                        className="block p-3 rounded-md bg-gray-50 hover:bg-primary-50 hover:text-primary-600 transition-colors border border-gray-200 hover:border-primary-300"
                                        data-testid={`nav-${route.path.replace('/', '')}`}
                                    >
                                        <span className="font-medium">{route.label}</span>
                                        <span className="text-sm text-gray-500 block">{route.description}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
                    <h2 className="text-xl font-bold mb-4">Testing Instructions</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Each page contains test elements with specific CSS utility classes applied</li>
                        <li>Use browser DevTools to inspect computed styles</li>
                        <li>Toggle the theme using the button in the header to test dark mode</li>
                        <li>Run Playwright tests with <code className="bg-gray-200 px-2 py-1 rounded">npm run test:e2e</code></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
