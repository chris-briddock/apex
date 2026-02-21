import type React from 'react';

/**
 * Overflow & Visibility Utilities Test Page
 * Tests: Overflow, Visibility, Cursor
 */
export const OverflowVisibilityPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Overflow & Visibility</h1>

            <section className="mb-8" data-testid="overflow-section">
                <h2 className="text-xl font-semibold mb-4">Overflow</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">overflow-auto:</p>
                        <div data-testid="overflow-auto" className="overflow-auto w-full h-32 bg-gray-100 p-2 border">
                            <div className="w-[200%] h-[200%] bg-primary-200 p-4">
                                Content is larger than container - scrollbars appear when needed
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">overflow-hidden:</p>
                        <div data-testid="overflow-hidden" className="overflow-hidden w-full h-32 bg-gray-100 p-2 border">
                            <div className="w-[200%] h-[200%] bg-success-200 p-4">
                                Content is larger than container - content is clipped
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">overflow-visible:</p>
                        <div data-testid="overflow-visible" className="overflow-visible w-full h-32 bg-gray-100 p-2 border relative">
                            <div className="absolute w-[150%] bg-warning-200 p-4">
                                Content overflows container - visible outside
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">overflow-scroll:</p>
                        <div data-testid="overflow-scroll" className="overflow-scroll w-full h-32 bg-gray-100 p-2 border">
                            <div className="w-[200%] h-[200%] bg-error-200 p-4">
                                Scrollbars always visible
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-lg font-medium mt-6 mb-3">Directional Overflow</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-2">overflow-x-auto:</p>
                        <div data-testid="overflow-x-auto" className="overflow-x-auto w-full h-32 bg-gray-100 p-2 border">
                            <div className="w-[200%] h-full bg-primary-200 p-4">
                                Horizontal overflow only
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-gray-600 mb-2">overflow-y-auto:</p>
                        <div data-testid="overflow-y-auto" className="overflow-y-auto w-full h-32 bg-gray-100 p-2 border">
                            <div className="w-full h-[200%] bg-success-200 p-4">
                                Vertical overflow only
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="visibility-section">
                <h2 className="text-xl font-semibold mb-4">Visibility</h2>

                <div className="flex gap-4 bg-gray-100 p-8">
                    <div data-testid="visible" className="visible bg-primary-500 text-white p-8">
                        visible
                    </div>
                    <div data-testid="invisible" className="invisible bg-success-500 text-white p-8">
                        invisible (takes up space)
                    </div>
                    <div className="bg-gray-300 p-8">
                        Reference element
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="cursor-section">
                <h2 className="text-xl font-semibold mb-4">Cursor</h2>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    <div data-testid="cursor-auto" className="cursor-auto bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        auto
                    </div>
                    <div data-testid="cursor-default" className="cursor-default bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        default
                    </div>
                    <div data-testid="cursor-pointer" className="cursor-pointer bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        pointer
                    </div>
                    <div data-testid="cursor-wait" className="cursor-wait bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        wait
                    </div>
                    <div data-testid="cursor-text" className="cursor-text bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        text
                    </div>
                    <div data-testid="cursor-move" className="cursor-move bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        move
                    </div>
                    <div data-testid="cursor-not-allowed" className="cursor-not-allowed bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        not-allowed
                    </div>
                    <div data-testid="cursor-help" className="cursor-help bg-gray-100 p-4 text-center border hover:bg-gray-200">
                        help
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OverflowVisibilityPage;
