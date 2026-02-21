import type React from 'react';

/**
 * Effects Utilities Test Page
 * Tests: Box shadow, Opacity, Z-index
 */
export const EffectsPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Effects Utilities</h1>

            <section className="mb-8" data-testid="shadow-section">
                <h2 className="text-xl font-semibold mb-4">Box Shadow</h2>

                <div className="flex flex-wrap gap-6 items-center bg-gray-100 p-8">
                    <div data-testid="shadow-sm" className="shadow-sm bg-white w-32 h-32 flex items-center justify-center rounded">
                        sm
                    </div>
                    <div data-testid="shadow" className="shadow bg-white w-32 h-32 flex items-center justify-center rounded">
                        default
                    </div>
                    <div data-testid="shadow-md" className="shadow-md bg-white w-32 h-32 flex items-center justify-center rounded">
                        md
                    </div>
                    <div data-testid="shadow-lg" className="shadow-lg bg-white w-32 h-32 flex items-center justify-center rounded">
                        lg
                    </div>
                    <div data-testid="shadow-xl" className="shadow-xl bg-white w-32 h-32 flex items-center justify-center rounded">
                        xl
                    </div>
                    <div data-testid="shadow-2xl" className="shadow-2xl bg-white w-32 h-32 flex items-center justify-center rounded">
                        2xl
                    </div>
                    <div data-testid="shadow-inner" className="shadow-inner bg-gray-200 w-32 h-32 flex items-center justify-center rounded">
                        inner
                    </div>
                    <div data-testid="shadow-none" className="shadow-none bg-white w-32 h-32 flex items-center justify-center rounded border">
                        none
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="opacity-section">
                <h2 className="text-xl font-semibold mb-4">Opacity</h2>

                <div className="flex flex-wrap gap-4 items-center bg-gray-100 p-8">
                    <div data-testid="opacity-0" className="opacity-0 bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        0%
                    </div>
                    <div data-testid="opacity-25" className="opacity-25 bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        25%
                    </div>
                    <div data-testid="opacity-50" className="opacity-50 bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        50%
                    </div>
                    <div data-testid="opacity-75" className="opacity-75 bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        75%
                    </div>
                    <div data-testid="opacity-100" className="opacity-100 bg-primary-500 text-white w-24 h-24 flex items-center justify-center">
                        100%
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="z-index-section">
                <h2 className="text-xl font-semibold mb-4">Z-Index</h2>

                <div className="relative h-64 bg-gray-100 p-4">
                    <div data-testid="z-0" className="absolute top-0 left-0 z-0 bg-primary-200 w-32 h-32 flex items-center justify-center border-2 border-primary-500">
                        z-0
                    </div>
                    <div data-testid="z-10" className="absolute top-4 left-4 z-10 bg-primary-300 w-32 h-32 flex items-center justify-center border-2 border-primary-500">
                        z-10
                    </div>
                    <div data-testid="z-20" className="absolute top-8 left-8 z-20 bg-primary-400 w-32 h-32 flex items-center justify-center border-2 border-primary-500">
                        z-20
                    </div>
                    <div data-testid="z-30" className="absolute top-12 left-12 z-30 bg-primary-500 text-white w-32 h-32 flex items-center justify-center border-2 border-primary-600">
                        z-30
                    </div>
                    <div data-testid="z-auto" className="absolute top-16 left-48 z-auto bg-success-500 text-white w-32 h-32 flex items-center justify-center border-2 border-success-600">
                        z-auto
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EffectsPage;
