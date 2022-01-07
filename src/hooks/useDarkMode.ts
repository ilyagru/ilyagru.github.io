import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../utils/theme';
import { isWindowDefined } from '../utils/window';

const useDarkMode = () => {
  const isWindow = isWindowDefined();
  const storedTheme = isWindow && window.localStorage.getItem('theme');
  const matchesDark =
    isWindow && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = storedTheme || (matchesDark ? 'dark' : 'light');

  const [theme, setTheme] = useState(initialTheme);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  useEffect(() => {
    if (isWindow) {
      window.localStorage.setItem('theme', theme);
      // Remove dark critical styles
      if (!isDark) {
        document.body.classList.remove('dark');
      }
    }
  }, [isWindow, isDark, theme]);

  return {
    isDark,
    theme: isDark ? darkTheme : lightTheme,
    toggleTheme,
  };
};

export default useDarkMode;
