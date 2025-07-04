import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // 1. Initialize state from localStorage or user's OS preference
    const [theme, setTheme] = useState(() => {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        // Check OS preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    // 2. Use an effect to apply the theme class to the <html> element
    useEffect(() => {
        const root = window.document.documentElement; // The <html> element

        // Remove the old theme class and add the new one
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);

        // 3. Save the theme to localStorage whenever it changes
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 4. Provide a function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easy access to the context
export const useTheme = () => {
    return useContext(ThemeContext);
};

export default ThemeContext;