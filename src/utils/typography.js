import Typography from 'typography';
import Wordpress2016Theme from 'typography-theme-wordpress-2016';

delete Wordpress2016Theme.googleFonts;

// baseFontSize 16px,
// baseLineHeight 1.75,
// scaleRatio 2.5
// rhythm unit 1.75rem

const typography = new Typography(Wordpress2016Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
