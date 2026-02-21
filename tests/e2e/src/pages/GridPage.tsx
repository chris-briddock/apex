import type React from 'react';

/**
 * Grid Utilities Test Page
 * Tests: grid columns, column span, gaps
 */
export const GridPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Grid Utilities</h1>

            <section className="mb-8" data-testid="grid-cols-section">
                <h2 className="text-xl font-semibold mb-4">Grid Template Columns</h2>

                <div className="space-y-4">
                    {[
                        { id: 'grid-cols-1', cols: 1, class: 'grid-cols-1' },
                        { id: 'grid-cols-2', cols: 2, class: 'grid-cols-2' },
                        { id: 'grid-cols-3', cols: 3, class: 'grid-cols-3' },
                        { id: 'grid-cols-4', cols: 4, class: 'grid-cols-4' },
                        { id: 'grid-cols-6', cols: 6, class: 'grid-cols-6' },
                        { id: 'grid-cols-12', cols: 12, class: 'grid-cols-12' },
                    ].map(({ id, cols, class: className }) => (
                        <div key={id}>
                            <p className="text-sm text-gray-600 mb-2">{className}:</p>
                            <div data-testid={id} className={`grid ${className} gap-2 bg-gray-100 p-4`}>
                                {Array.from({ length: cols }, (_, i) => (
                                    <div key={i} className="bg-primary-500 text-white p-4 text-center">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8" data-testid="col-span-section">
                <h2 className="text-xl font-semibold mb-4">Column Span</h2>

                <div className="space-y-4">
                    <div data-testid="col-span-demo" className="grid grid-cols-4 gap-2 bg-gray-100 p-4">
                        <div data-testid="col-span-1" className="col-span-1 bg-success-500 text-white p-4 text-center">
                            col-span-1
                        </div>
                        <div data-testid="col-span-2" className="col-span-2 bg-success-500 text-white p-4 text-center">
                            col-span-2
                        </div>
                        <div data-testid="col-span-3" className="col-span-3 bg-success-500 text-white p-4 text-center">
                            col-span-3
                        </div>
                        <div data-testid="col-span-full" className="col-span-full bg-success-500 text-white p-4 text-center">
                            col-span-full
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="gap-section">
                <h2 className="text-xl font-semibold mb-4">Gap</h2>

                <div className="space-y-4">
                    {[
                        { id: 'gap-0', size: 'gap-0', class: 'gap-0' },
                        { id: 'gap-1', size: 'gap-1', class: 'gap-1' },
                        { id: 'gap-2', size: 'gap-2', class: 'gap-2' },
                        { id: 'gap-4', size: 'gap-4', class: 'gap-4' },
                        { id: 'gap-8', size: 'gap-8', class: 'gap-8' },
                    ].map(({ id, size, class: className }) => (
                        <div key={id}>
                            <p className="text-sm text-gray-600 mb-2">{size}:</p>
                            <div data-testid={id} className={`grid grid-cols-3 ${className} bg-gray-100 p-4`}>
                                <div className="bg-warning-500 text-white p-4 text-center">A</div>
                                <div className="bg-warning-500 text-white p-4 text-center">B</div>
                                <div className="bg-warning-500 text-white p-4 text-center">C</div>
                                <div className="bg-warning-500 text-white p-4 text-center">D</div>
                                <div className="bg-warning-500 text-white p-4 text-center">E</div>
                                <div className="bg-warning-500 text-white p-4 text-center">F</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GridPage;
