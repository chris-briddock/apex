import type React from 'react';

/**
 * Colors Utilities Test Page
 * Tests: Background colors, Text colors
 */
export const ColorsPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Color Utilities</h1>

            <section className="mb-8" data-testid="bg-primary-section">
                <h2 className="text-xl font-semibold mb-4">Primary Colors (Blue)</h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <div data-testid="bg-primary-50" className="bg-primary-50 p-4 text-center text-gray-800">50</div>
                    <div data-testid="bg-primary-100" className="bg-primary-100 p-4 text-center text-gray-800">100</div>
                    <div data-testid="bg-primary-200" className="bg-primary-200 p-4 text-center text-gray-800">200</div>
                    <div data-testid="bg-primary-300" className="bg-primary-300 p-4 text-center text-gray-800">300</div>
                    <div data-testid="bg-primary-400" className="bg-primary-400 p-4 text-center">400</div>
                    <div data-testid="bg-primary-500" className="bg-primary-500 p-4 text-center text-white">500</div>
                    <div data-testid="bg-primary-600" className="bg-primary-600 p-4 text-center text-white">600</div>
                    <div data-testid="bg-primary-700" className="bg-primary-700 p-4 text-center text-white">700</div>
                    <div data-testid="bg-primary-800" className="bg-primary-800 p-4 text-center text-white">800</div>
                    <div data-testid="bg-primary-900" className="bg-primary-900 p-4 text-center text-white">900</div>
                </div>
            </section>

            <section className="mb-8" data-testid="bg-gray-section">
                <h2 className="text-xl font-semibold mb-4">Gray Colors</h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <div data-testid="bg-gray-50" className="bg-gray-50 p-4 text-center text-gray-800">50</div>
                    <div data-testid="bg-gray-100" className="bg-gray-100 p-4 text-center text-gray-800">100</div>
                    <div data-testid="bg-gray-200" className="bg-gray-200 p-4 text-center text-gray-800">200</div>
                    <div data-testid="bg-gray-300" className="bg-gray-300 p-4 text-center text-gray-800">300</div>
                    <div data-testid="bg-gray-400" className="bg-gray-400 p-4 text-center">400</div>
                    <div data-testid="bg-gray-500" className="bg-gray-500 p-4 text-center text-white">500</div>
                    <div data-testid="bg-gray-600" className="bg-gray-600 p-4 text-center text-white">600</div>
                    <div data-testid="bg-gray-700" className="bg-gray-700 p-4 text-center text-white">700</div>
                    <div data-testid="bg-gray-800" className="bg-gray-800 p-4 text-center text-white">800</div>
                    <div data-testid="bg-gray-900" className="bg-gray-900 p-4 text-center text-white">900</div>
                </div>
            </section>

            <section className="mb-8" data-testid="bg-semantic-section">
                <h2 className="text-xl font-semibold mb-4">Semantic Colors</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div data-testid="bg-success" className="bg-success p-4 text-center text-white">Success</div>
                    <div data-testid="bg-warning" className="bg-warning p-4 text-center text-white">Warning</div>
                    <div data-testid="bg-error" className="bg-error p-4 text-center text-white">Error</div>
                    <div data-testid="bg-info" className="bg-info p-4 text-center text-white">Info</div>
                </div>
            </section>

            <section className="mb-8" data-testid="text-color-section">
                <h2 className="text-xl font-semibold mb-4">Text Colors</h2>

                <div className="space-y-2 bg-gray-100 p-4">
                    <p data-testid="text-primary" className="text-primary text-xl">text-primary</p>
                    <p data-testid="text-gray-500" className="text-gray-500 text-xl">text-gray-500</p>
                    <p data-testid="text-gray-700" className="text-gray-700 text-xl">text-gray-700</p>
                    <p data-testid="text-success" className="text-success text-xl">text-success</p>
                    <p data-testid="text-warning" className="text-warning text-xl">text-warning</p>
                    <p data-testid="text-error" className="text-error text-xl">text-error</p>
                    <p data-testid="text-info" className="text-info text-xl">text-info</p>
                    <div className="bg-gray-800 p-2">
                        <p data-testid="text-white" className="text-white text-xl">text-white</p>
                    </div>
                    <p data-testid="text-black" className="text-black text-xl">text-black</p>
                </div>
            </section>

            <section className="mb-8" data-testid="dark-mode-section">
                <h2 className="text-xl font-semibold mb-4">Dark Mode Test</h2>
                <p className="text-gray-600 mb-4">
                    Toggle the theme using the button in the header to see dark mode colors.
                </p>
                <div className="dark:bg-gray-900 dark:text-white bg-white text-gray-900 p-4 border rounded">
                    <p data-testid="dark-mode-test">
                        This box should change appearance in dark mode.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ColorsPage;
