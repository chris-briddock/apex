import type React from 'react';

/**
 * Position Utilities Test Page
 * Tests: static, relative, absolute, fixed, sticky
 */
export const PositionPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Position Utilities</h1>

            <section className="mb-8" data-testid="position-section">
                <h2 className="text-xl font-semibold mb-4">Position Types</h2>

                <div className="space-y-4">
                    <div data-testid="position-static" className="static bg-primary-100 p-4 border-2 border-primary-500">
                        static position
                    </div>

                    <div data-testid="position-relative" className="relative bg-success-100 p-4 border-2 border-success-500">
                        relative position
                    </div>

                    <div className="relative h-32 bg-gray-100 p-4">
                        <p className="mb-2 text-sm text-gray-600">Container for absolute positioning:</p>
                        <div data-testid="position-absolute" className="absolute top-2 right-2 bg-warning-100 p-2 border-2 border-warning-500">
                            absolute position
                        </div>
                    </div>

                    <div data-testid="position-fixed" className="fixed bottom-4 right-4 bg-error-100 p-4 border-2 border-error-500 z-50">
                        fixed position
                    </div>

                    <div className="h-48 overflow-auto">
                        <p className="mb-2 text-sm text-gray-600">Scroll container for sticky test:</p>
                        <div className="h-64 bg-gray-100 p-4">
                            <div data-testid="position-sticky" className="sticky top-0 bg-info-100 p-4 border-2 border-info-500">
                                sticky position (sticks to top when scrolling)
                            </div>
                            <div className="h-32 bg-gray-200 mt-4">Scroll content below</div>
                            <div className="h-32 bg-gray-300 mt-4">More scroll content</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PositionPage;
