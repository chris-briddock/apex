import type React from 'react';

/**
 * Display Utilities Test Page
 * Tests: block, inline, inline-block, flex, inline-flex, grid, inline-grid, hidden
 */
export const DisplayPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Display Utilities</h1>

            <section className="mb-8" data-testid="display-section">
                <h2 className="text-xl font-semibold mb-4">Display Types</h2>

                <div className="test-grid">
                    <div className="test-item">
                        <span data-testid="display-block" className="block bg-primary-100 p-2">
                            block
                        </span>
                    </div>

                    <div className="test-item">
                        <span data-testid="display-inline" className="inline bg-primary-100 p-2">
                            inline
                        </span>
                    </div>

                    <div className="test-item">
                        <span data-testid="display-inline-block" className="inline-block bg-primary-100 p-2">
                            inline-block
                        </span>
                    </div>

                    <div className="test-item">
                        <div data-testid="display-flex" className="flex bg-primary-100 p-2">
                            <span>flex</span>
                        </div>
                    </div>

                    <div className="test-item">
                        <span data-testid="display-inline-flex" className="inline-flex bg-primary-100 p-2">
                            inline-flex
                        </span>
                    </div>

                    <div className="test-item">
                        <div data-testid="display-grid" className="grid bg-primary-100 p-2">
                            <span>grid</span>
                        </div>
                    </div>

                    <div className="test-item">
                        <span data-testid="display-inline-grid" className="inline-grid bg-primary-100 p-2">
                            inline-grid
                        </span>
                    </div>

                    <div className="test-item">
                        <span data-testid="display-none" className="hidden bg-primary-100 p-2">
                            hidden (should not be visible)
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DisplayPage;
