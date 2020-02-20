import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../utils/theme';

const useTheme = () => {
  const storedTheme = typeof window !== 'undefined' && window.localStorage.getItem('theme');
  const matchesDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme ? storedTheme : matchesDark ? 'dark' : 'light';

  const [theme, setTheme] = useState(initialTheme);

  const isLight = theme === 'light';
  const toggleTheme = () => setTheme(isLight ? 'dark' : 'light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
      // Remove dark critical styles
      if (isLight) {
        document.body.classList.remove('dark');
      }
    }
  }, [isLight, theme]);

  return {
    isLight,
    theme: isLight ? lightTheme : darkTheme,
    toggleTheme,
  };
};

export default useTheme;
