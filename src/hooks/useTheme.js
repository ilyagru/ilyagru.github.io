import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../utils/theme';
import { isWindowDefined } from '../utils/window';

const useTheme = () => {
  const isWindow = isWindowDefined();
  const storedTheme = isWindow && window.localStorage.getItem('theme');
  const matchesDark =
    isWindow && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = storedTheme ? storedTheme : matchesDark ? 'dark' : 'light';

  const [theme, setTheme] = useState(initialTheme);

  const isLight = theme === 'light';
  const toggleTheme = () => setTheme(isLight ? 'dark' : 'light');

  useEffect(() => {
    if (isWindow) {
      window.localStorage.setItem('theme', theme);
      // Remove dark critical styles
      if (isLight) {
        document.body.classList.remove('dark');
      }
    }
  }, [isWindow, isLight, theme]);

  return {
    isLight,
    theme: isLight ? lightTheme : darkTheme,
    toggleTheme,
  };
};

export default useTheme;
