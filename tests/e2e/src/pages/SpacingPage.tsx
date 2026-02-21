import type React from 'react';

/**
 * Spacing Utilities Test Page
 * Tests: Margin and Padding utilities
 */
export const SpacingPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Spacing Utilities</h1>

            <section className="mb-8" data-testid="margin-section">
                <h2 className="text-xl font-semibold mb-4">Margin</h2>

                <div className="bg-gray-200 p-4 space-y-4">
                    <div className="bg-white">
                        <span data-testid="m-0" className="m-0 bg-primary-100 inline-block">m-0</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="m-1" className="m-1 bg-primary-100 inline-block">m-1</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="m-2" className="m-2 bg-primary-100 inline-block">m-2</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="m-4" className="m-4 bg-primary-100 inline-block">m-4</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="m-8" className="m-8 bg-primary-100 inline-block">m-8</span>
                    </div>
                </div>

                <h3 className="text-lg font-medium mt-6 mb-3">Directional Margins</h3>
                <div className="bg-gray-200 p-4 space-y-4">
                    <div className="bg-white">
                        <span data-testid="mt-4" className="mt-4 bg-success-100 inline-block">mt-4</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="mr-4" className="mr-4 bg-success-100 inline-block">mr-4</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="mb-4" className="mb-4 bg-success-100 inline-block">mb-4</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="ml-4" className="ml-4 bg-success-100 inline-block">ml-4</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="mx-4" className="mx-4 bg-success-100 inline-block">mx-4</span>
                    </div>
                    <div className="bg-white">
                        <span data-testid="my-4" className="my-4 bg-success-100 inline-block">my-4</span>
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="padding-section">
                <h2 className="text-xl font-semibold mb-4">Padding</h2>

                <div className="flex flex-wrap gap-4">
                    <span data-testid="p-0" className="p-0 bg-primary-500 text-white">p-0</span>
                    <span data-testid="p-1" className="p-1 bg-primary-500 text-white">p-1</span>
                    <span data-testid="p-2" className="p-2 bg-primary-500 text-white">p-2</span>
                    <span data-testid="p-4" className="p-4 bg-primary-500 text-white">p-4</span>
                    <span data-testid="p-8" className="p-8 bg-primary-500 text-white">p-8</span>
                </div>

                <h3 className="text-lg font-medium mt-6 mb-3">Directional Padding</h3>
                <div className="flex flex-wrap gap-4">
                    <span data-testid="pt-4" className="pt-4 bg-success-500 text-white">pt-4</span>
                    <span data-testid="pr-4" className="pr-4 bg-success-500 text-white">pr-4</span>
                    <span data-testid="pb-4" className="pb-4 bg-success-500 text-white">pb-4</span>
                    <span data-testid="pl-4" className="pl-4 bg-success-500 text-white">pl-4</span>
                    <span data-testid="px-4" className="px-4 bg-success-500 text-white">px-4</span>
                    <span data-testid="py-4" className="py-4 bg-success-500 text-white">py-4</span>
                </div>
            </section>
        </div>
    );
};

export default SpacingPage;
