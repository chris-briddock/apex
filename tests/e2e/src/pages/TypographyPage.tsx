import type React from 'react';

/**
 * Typography Utilities Test Page
 * Tests: font sizes, weights, alignment, transforms, line-height, letter-spacing
 */
export const TypographyPage: React.FC = () => {
    return (
        <div className="page-container">
            <h1 className="text-2xl font-bold mb-6">Typography Utilities</h1>

            <section className="mb-8" data-testid="font-size-section">
                <h2 className="text-xl font-semibold mb-4">Font Size</h2>

                <div className="space-y-2 bg-gray-50 p-4">
                    <p data-testid="text-xs" className="text-xs">text-xs - Extra small text</p>
                    <p data-testid="text-sm" className="text-sm">text-sm - Small text</p>
                    <p data-testid="text-base" className="text-base">text-base - Base text (default)</p>
                    <p data-testid="text-lg" className="text-lg">text-lg - Large text</p>
                    <p data-testid="text-xl" className="text-xl">text-xl - Extra large text</p>
                    <p data-testid="text-2xl" className="text-2xl">text-2xl - 2X large text</p>
                    <p data-testid="text-3xl" className="text-3xl">text-3xl - 3X large text</p>
                    <p data-testid="text-4xl" className="text-4xl">text-4xl - 4X large text</p>
                </div>
            </section>

            <section className="mb-8" data-testid="font-weight-section">
                <h2 className="text-xl font-semibold mb-4">Font Weight</h2>

                <div className="space-y-2 bg-gray-50 p-4">
                    <p data-testid="font-thin" className="font-thin text-xl">font-thin (100)</p>
                    <p data-testid="font-light" className="font-light text-xl">font-light (300)</p>
                    <p data-testid="font-normal" className="font-normal text-xl">font-normal (400)</p>
                    <p data-testid="font-medium" className="font-medium text-xl">font-medium (500)</p>
                    <p data-testid="font-semibold" className="font-semibold text-xl">font-semibold (600)</p>
                    <p data-testid="font-bold" className="font-bold text-xl">font-bold (700)</p>
                    <p data-testid="font-black" className="font-black text-xl">font-black (900)</p>
                </div>
            </section>

            <section className="mb-8" data-testid="text-align-section">
                <h2 className="text-xl font-semibold mb-4">Text Alignment</h2>

                <div className="space-y-2 bg-gray-50 p-4 max-w-md">
                    <p data-testid="text-left" className="text-left bg-white p-2">text-left - Aligned to the left</p>
                    <p data-testid="text-center" className="text-center bg-white p-2">text-center - Center aligned</p>
                    <p data-testid="text-right" className="text-right bg-white p-2">text-right - Aligned to the right</p>
                    <p data-testid="text-justify" className="text-justify bg-white p-2">
                        text-justify - This text is justified which means it spreads out to fill the entire line width
                    </p>
                </div>
            </section>

            <section className="mb-8" data-testid="text-transform-section">
                <h2 className="text-xl font-semibold mb-4">Text Transform</h2>

                <div className="space-y-2 bg-gray-50 p-4">
                    <p data-testid="uppercase" className="uppercase">uppercase - THIS IS UPPERCASE</p>
                    <p data-testid="lowercase" className="lowercase">lowercase - this is lowercase</p>
                    <p data-testid="capitalize" className="capitalize">capitalize - This Is Capitalized</p>
                    <p data-testid="normal-case" className="normal-case">normal-case - This is normal case</p>
                </div>
            </section>

            <section className="mb-8" data-testid="line-height-section">
                <h2 className="text-xl font-semibold mb-4">Line Height</h2>

                <div className="space-y-4 bg-gray-50 p-4 max-w-md">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">leading-none:</p>
                        <p data-testid="leading-none" className="leading-none bg-white p-2">
                            This is a paragraph with no line height. The lines are very close together.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">leading-tight:</p>
                        <p data-testid="leading-tight" className="leading-tight bg-white p-2">
                            This is a paragraph with tight line height. The lines are close together.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">leading-normal:</p>
                        <p data-testid="leading-normal" className="leading-normal bg-white p-2">
                            This is a paragraph with normal line height. The lines have standard spacing.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">leading-relaxed:</p>
                        <p data-testid="leading-relaxed" className="leading-relaxed bg-white p-2">
                            This is a paragraph with relaxed line height. The lines have more breathing room.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">leading-loose:</p>
                        <p data-testid="leading-loose" className="leading-loose bg-white p-2">
                            This is a paragraph with loose line height. The lines have maximum spacing.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-8" data-testid="letter-spacing-section">
                <h2 className="text-xl font-semibold mb-4">Letter Spacing</h2>

                <div className="space-y-2 bg-gray-50 p-4">
                    <p data-testid="tracking-tighter" className="tracking-tighter text-xl">tracking-tighter</p>
                    <p data-testid="tracking-tight" className="tracking-tight text-xl">tracking-tight</p>
                    <p data-testid="tracking-normal" className="tracking-normal text-xl">tracking-normal</p>
                    <p data-testid="tracking-wide" className="tracking-wide text-xl">tracking-wide</p>
                    <p data-testid="tracking-wider" className="tracking-wider text-xl">tracking-wider</p>
                    <p data-testid="tracking-widest" className="tracking-widest text-xl">tracking-widest</p>
                </div>
            </section>
        </div>
    );
};

export default TypographyPage;
