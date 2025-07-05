import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
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

//    
    useEffect(() => {
        const root = window.document.documentElement; // The <html> element

       
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);

     
        localStorage.setItem('theme', theme);
    }, [theme]);

   
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