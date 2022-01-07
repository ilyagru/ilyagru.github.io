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

  useEffect(() => {
    if (isWindow) {
      window.localStorage.setItem('theme', theme);

      if (isDark) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }
    }
  }, [isWindow, isDark, theme]);

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return {
    isDark,
    toggleTheme,
    theme: isDark ? darkTheme : lightTheme,
  };
};

export default useDarkMode;
