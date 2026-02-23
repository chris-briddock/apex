import type React from 'react';

/**
 * Borders Utilities Test Page
 * Tests: Border radius, width, style, color
 */
export const BordersPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Border Utilities</h1>

            <section className="mb-8" data-testid="border-radius-section">
                <h2 className="text-xl font-semibold mb-4">Border Radius</h2>

                <div className="flex flex-wrap gap-4">
                    <div data-testid="rounded-none" className="rounded-none bg-primary-500 text-white w-24 h-24 flex items-center justify-center border-2 border-gray-800">
                        none
                    </div>
                    <div data-testid="rounded-sm" className="rounded-sm bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        sm
                    </div>
                    <div data-testid="rounded" className="rounded bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        default
                    </div>
                    <div data-testid="rounded-md" className="rounded-md bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        md
                    </div>
                    <div data-testid="rounded-lg" className="rounded-lg bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        lg
                    </div>
                    <div data-testid="rounded-xl" className="rounded-xl bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        xl
                    </div>
                    <div data-testid="rounded-2xl" className="rounded-2xl bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        2xl
                    </div>
                    <div data-testid="rounded-full" className="rounded-full bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        full
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="border-width-section">
                <h2 className="text-xl font-semibold mb-4">Border Width</h2>

                <div className="flex flex-wrap gap-4 items-center">
                    <div data-testid="border-0" className="border-0 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        0
                    </div>
                    <div data-testid="border" className="border border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        default
                    </div>
                    <div data-testid="border-2" className="border-2 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        2
                    </div>
                    <div data-testid="border-4" className="border-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        4
                    </div>
                    <div data-testid="border-8" className="border-8 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        8
                    </div>
                </div>

                <h3 className="text-lg font-medium mt-6 mb-3">Directional Borders</h3>
                <div className="flex flex-wrap gap-4 items-center">
                    <div data-testid="border-t" className="border-t-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        top
                    </div>
                    <div data-testid="border-r" className="border-r-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        right
                    </div>
                    <div data-testid="border-b" className="border-b-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        bottom
                    </div>
                    <div data-testid="border-l" className="border-l-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        left
                    </div>
                    <div data-testid="border-x" className="border-x-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        x-axis
                    </div>
                    <div data-testid="border-y" className="border-y-4 border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        y-axis
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="border-style-section">
                <h2 className="text-xl font-semibold mb-4">Border Style</h2>

                <div className="flex flex-wrap gap-4 items-center">
                    <div data-testid="border-solid" className="border-4 border-solid border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        solid
                    </div>
                    <div data-testid="border-dashed" className="border-4 border-dashed border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        dashed
                    </div>
                    <div data-testid="border-dotted" className="border-4 border-dotted border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        dotted
                    </div>
                    <div data-testid="border-double" className="border-4 border-double border-gray-800 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        double
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="border-color-section">
                <h2 className="text-xl font-semibold mb-4">Border Color</h2>

                <div className="flex flex-wrap gap-4 items-center">
                    <div data-testid="border-primary" className="border-4 border-primary bg-gray-100 w-24 h-24 flex items-center justify-center">
                        primary
                    </div>
                    <div data-testid="border-success" className="border-4 border-success bg-gray-100 w-24 h-24 flex items-center justify-center">
                        success
                    </div>
                    <div data-testid="border-warning" className="border-4 border-warning bg-gray-100 w-24 h-24 flex items-center justify-center">
                        warning
                    </div>
                    <div data-testid="border-danger" className="border-4 border-danger bg-gray-100 w-24 h-24 flex items-center justify-center">
                        danger
                    </div>
                    <div data-testid="border-gray-300" className="border-4 border-gray-300 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        gray-300
                    </div>
                    <div data-testid="border-gray-500" className="border-4 border-gray-500 bg-gray-100 w-24 h-24 flex items-center justify-center">
                        gray-500
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BordersPage;
