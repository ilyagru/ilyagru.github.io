import { createElement } from 'react';
import criticalStyle from './src/utils/criticalStyle';

const applyDarkClass = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');}}catch(e){}})();`;

/*
 * This handles the flash on opening when dark mode should be enabled by default.
 */
export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  const darkClassScript = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyDarkClass,
    },
    key: 'darkModeClassScript',
  });
  const criticalStyles = createElement('style', {
    dangerouslySetInnerHTML: {
      __html: criticalStyle,
    },
    key: 'criticalStyles',
  });

  setHeadComponents([criticalStyles]);
  setPreBodyComponents([darkClassScript]);
};
