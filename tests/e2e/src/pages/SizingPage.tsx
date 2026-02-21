import type React from 'react';

/**
 * Sizing Utilities Test Page
 * Tests: Width, Height, Min/Max sizing
 */
export const SizingPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Sizing Utilities</h1>

            <section className="mb-8" data-testid="width-section">
                <h2 className="text-xl font-semibold mb-4">Width</h2>

                <div className="space-y-4 bg-gray-100 p-4">
                    <div data-testid="w-0" className="w-0 bg-primary-500 text-white overflow-hidden">
                        w-0 (0 width)
                    </div>
                    <div data-testid="w-1/2" className="w-1/2 bg-primary-500 text-white p-2">
                        w-1/2 (50% width)
                    </div>
                    <div data-testid="w-1/4" className="w-1/4 bg-primary-500 text-white p-2">
                        w-1/4 (25% width)
                    </div>
                    <div data-testid="w-3/4" className="w-3/4 bg-primary-500 text-white p-2">
                        w-3/4 (75% width)
                    </div>
                    <div data-testid="w-full" className="w-full bg-primary-500 text-white p-2">
                        w-full (100% width)
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="height-section">
                <h2 className="text-xl font-semibold mb-4">Height</h2>

                <div className="flex gap-4 items-start bg-gray-100 p-4 h-64">
                    <div data-testid="h-0" className="h-0 bg-success-500 text-white overflow-hidden">
                        h-0
                    </div>
                    <div data-testid="h-16" className="h-16 bg-success-500 text-white p-2">
                        h-16
                    </div>
                    <div data-testid="h-32" className="h-32 bg-success-500 text-white p-2">
                        h-32
                    </div>
                    <div data-testid="h-full" className="h-full bg-success-500 text-white p-2">
                        h-full
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="min-max-section">
                <h2 className="text-xl font-semibold mb-4">Min / Max Width</h2>

                <div className="space-y-4 bg-gray-100 p-4">
                    <div data-testid="min-w-0" className="min-w-0 bg-warning-500 text-white p-2 inline-block">
                        min-w-0
                    </div>
                    <div data-testid="min-w-full" className="min-w-full bg-warning-500 text-white p-2">
                        min-w-full
                    </div>
                    <div data-testid="max-w-xs" className="max-w-xs bg-warning-500 text-white p-2">
                        max-w-xs (max-width extra small)
                    </div>
                    <div data-testid="max-w-md" className="max-w-md bg-warning-500 text-white p-2">
                        max-w-md (max-width medium)
                    </div>
                    <div data-testid="max-w-full" className="max-w-full bg-warning-500 text-white p-2">
                        max-w-full (max-width 100%)
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SizingPage;
