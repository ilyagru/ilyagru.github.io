import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import Wordpress2016Theme from 'typography-theme-wordpress-2016';

import globalStyles from './globalStyles';

Wordpress2016Theme.plugins = [
  new CodePlugin(),
];
Wordpress2016Theme.overrideThemeStyles = () => {
  return globalStyles;
};

delete Wordpress2016Theme.googleFonts;

const typography = new Typography(Wordpress2016Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
