import type React from 'react';

/**
 * Flexbox Utilities Test Page
 * Tests: flex direction, wrap, justify-content, align-items, align-content
 */
export const FlexboxPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Flexbox Utilities</h1>

            <section className="mb-8" data-testid="flex-direction-section">
                <h2 className="text-xl font-semibold mb-4">Flex Direction</h2>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">flex-row (default):</p>
                        <div data-testid="flex-row" className="flex flex-row gap-2 bg-gray-100 p-4">
                            <div className="bg-primary-500 text-white p-4">Item 1</div>
                            <div className="bg-primary-500 text-white p-4">Item 2</div>
                            <div className="bg-primary-500 text-white p-4">Item 3</div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">flex-row-reverse:</p>
                        <div data-testid="flex-row-reverse" className="flex flex-row-reverse gap-2 bg-gray-100 p-4">
                            <div className="bg-success-500 text-white p-4">Item 1</div>
                            <div className="bg-success-500 text-white p-4">Item 2</div>
                            <div className="bg-success-500 text-white p-4">Item 3</div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">flex-col:</p>
                        <div data-testid="flex-col" className="flex flex-col gap-2 bg-gray-100 p-4">
                            <div className="bg-warning-500 text-white p-4">Item 1</div>
                            <div className="bg-warning-500 text-white p-4">Item 2</div>
                            <div className="bg-warning-500 text-white p-4">Item 3</div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">flex-col-reverse:</p>
                        <div data-testid="flex-col-reverse" className="flex flex-col-reverse gap-2 bg-gray-100 p-4">
                            <div className="bg-error-500 text-white p-4">Item 1</div>
                            <div className="bg-error-500 text-white p-4">Item 2</div>
                            <div className="bg-error-500 text-white p-4">Item 3</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="flex-wrap-section">
                <h2 className="text-xl font-semibold mb-4">Flex Wrap</h2>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">flex-wrap:</p>
                        <div data-testid="flex-wrap" className="flex flex-wrap gap-2 bg-gray-100 p-4 w-64">
                            <div className="bg-primary-500 text-white p-4 w-24">Item 1</div>
                            <div className="bg-primary-500 text-white p-4 w-24">Item 2</div>
                            <div className="bg-primary-500 text-white p-4 w-24">Item 3</div>
                            <div className="bg-primary-500 text-white p-4 w-24">Item 4</div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">flex-nowrap:</p>
                        <div data-testid="flex-nowrap" className="flex flex-nowrap gap-2 bg-gray-100 p-4 w-64 overflow-hidden">
                            <div className="bg-success-500 text-white p-4 w-24 flex-shrink-0">Item 1</div>
                            <div className="bg-success-500 text-white p-4 w-24 flex-shrink-0">Item 2</div>
                            <div className="bg-success-500 text-white p-4 w-24 flex-shrink-0">Item 3</div>
                            <div className="bg-success-500 text-white p-4 w-24 flex-shrink-0">Item 4</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="justify-content-section">
                <h2 className="text-xl font-semibold mb-4">Justify Content</h2>

                <div className="space-y-4">
                    {[
                        { id: 'justify-start', class: 'justify-start', label: 'justify-start' },
                        { id: 'justify-center', class: 'justify-center', label: 'justify-center' },
                        { id: 'justify-end', class: 'justify-end', label: 'justify-end' },
                        { id: 'justify-between', class: 'justify-between', label: 'justify-between' },
                        { id: 'justify-around', class: 'justify-around', label: 'justify-around' },
                        { id: 'justify-evenly', class: 'justify-evenly', label: 'justify-evenly' },
                    ].map(({ id, class: className, label }) => (
                        <div key={id}>
                            <p className="text-sm text-gray-600 mb-2">{label}:</p>
                            <div data-testid={id} className={`flex ${className} gap-2 bg-gray-100 p-4`}>
                                <div className="bg-primary-500 text-white p-4">A</div>
                                <div className="bg-primary-500 text-white p-4">B</div>
                                <div className="bg-primary-500 text-white p-4">C</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8" data-testid="align-items-section">
                <h2 className="text-xl font-semibold mb-4">Align Items</h2>

                <div className="space-y-4">
                    {[
                        { id: 'items-start', class: 'items-start', label: 'items-start' },
                        { id: 'items-center', class: 'items-center', label: 'items-center' },
                        { id: 'items-end', class: 'items-end', label: 'items-end' },
                        { id: 'items-stretch', class: 'items-stretch', label: 'items-stretch' },
                    ].map(({ id, class: className, label }) => (
                        <div key={id}>
                            <p className="text-sm text-gray-600 mb-2">{label}:</p>
                            <div data-testid={id} className={`flex ${className} gap-2 bg-gray-100 p-4 h-32`}>
                                <div className="bg-success-500 text-white p-4 h-16">A</div>
                                <div className="bg-success-500 text-white p-4">B</div>
                                <div className="bg-success-500 text-white p-4 h-20">C</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FlexboxPage;
