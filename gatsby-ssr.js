import { createElement } from 'react';
import { darkTheme } from './src/utils/theme';

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('theme');
    if (mode === 'dark') {
			document.body.classList.add('dark');
		}
  } catch (e) {}
})();
`;
const applyCriticalStyles = `
  body.dark {
    background-color: ${darkTheme.mainBackgroundColor};
    color: ${darkTheme.textColor};
  }
`;

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  const darkClassScript = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
    key: 'darkModeClassScript',
  });
  const criticalStyles = createElement('style', {
    dangerouslySetInnerHTML: {
      __html: applyCriticalStyles,
    },
    key: 'criticalStyles',
  });

  setHeadComponents([criticalStyles]);
  setPreBodyComponents([darkClassScript]);
};
