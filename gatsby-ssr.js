import { createElement } from 'react';
import { darkTheme } from './src/utils/theme';

const applyDarkClass = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');}}catch(e){}})();`;
const applyCriticalDarkStyles = `body.dark{background-color:${darkTheme.mainBackgroundColor};color:${darkTheme.textColor};}body.dark button{color:${darkTheme.textColor};}`;

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  const darkClassScript = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkClass,
    },
    key: 'darkModeClassScript',
  });
  const criticalStyles = createElement('style', {
    dangerouslySetInnerHTML: {
      __html: applyCriticalDarkStyles,
    },
    key: 'criticalStyles',
  });

  setHeadComponents([criticalStyles]);
  setPreBodyComponents([darkClassScript]);
};
