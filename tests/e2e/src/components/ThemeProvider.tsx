import type React from 'react';
import { useState } from 'react';
import { ThemeContext, type Theme } from '../context/ThemeContext';

type ThemeProviderProps = {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme} data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
