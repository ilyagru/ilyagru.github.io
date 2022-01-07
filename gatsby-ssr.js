import { createElement } from 'react';
import criticalStyle from './src/utils/criticalStyle';
import applyPreDarkModeScript from './src/utils/applyPreDarkModeScript';

/*
 * This handles the flash on opening when dark mode should be enabled by default.
 */
export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  const darkClassScript = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: applyPreDarkModeScript,
    },
    key: 'applyPreDarkModeScript',
  });
  const criticalStyles = createElement('style', {
    dangerouslySetInnerHTML: {
      __html: criticalStyle,
    },
    key: 'criticalStyle',
  });

  setHeadComponents([criticalStyles]);
  setPreBodyComponents([darkClassScript]);
};
