import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    accentColor: string;
    accentColorReversed: string;

    radius: string;
    transition: string;
    bodyTransition: string;
    navbarCardBoxShadow: string;
    cardBoxShadow: string;
    montserratFont: string;
    merriweatherFont: string;
    oxygenMonoFont: string;

    // Colors
    mainBackgroundColor: string;
    grayColor: string;
    textColor: string;
    textColorReversed: string;
    accentBackgroundColor: string;
    backgroundColor: string;
    backgroundColorTransparent: string;

    // Code colors
    commentColor: string;
    keywordColor: string;
    numberColor: string;
    stringColor: string;
    attrValueColor: string;
    punctuationColor: string;
    booleanColor: string;
    functionColor: string;
    builtinColor: string;
    operatorColor: string;
    classNameColor: string;
  }
}

const baseTheme = {
  // Sizes
  radius: '3px',
  // Animations
  transition: 'all 0.3s ease',
  bodyTransition: 'background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
  // Complex
  navbarCardBoxShadow: '-2px 0px 5px -1px rgba(0, 0, 0, 0.1);',
  cardBoxShadow: '0px 0px 5px -1px rgba(0, 0, 0, 0.1);',
  // Fonts
  montserratFont: 'Montserrat, sans-serif',
  merriweatherFont: 'Merriweather, sans-serif',
  oxygenMonoFont: "'Oxygen Mono', monospace",
};

const lightTheme: DefaultTheme = {
  ...baseTheme,
  // Colors
  accentColor: '#DAA520',
  accentColorReversed: '#E89456',
  mainBackgroundColor: '#fff',
  grayColor: 'rgba(0,0,0,0.59)',
  textColor: '#000',
  textColorReversed: '#fff',
  accentBackgroundColor: '#FFFAEF',
  backgroundColor: 'rgb(248, 248, 250)',
  backgroundColorTransparent: 'rgba(248,248,255,.7)',

  // Code colors
  commentColor: '#B5B5B6',
  keywordColor: '#DAA520',
  numberColor: '#A37ACC',
  stringColor: '#AAD273',
  attrValueColor: '#AAD273',
  punctuationColor: '#8DADE1',
  booleanColor: '#A37ACC',
  functionColor: '#F28779',
  builtinColor: '#E8905B',
  operatorColor: '#819ECD',
  classNameColor: '#6A4C93',
};

const darkTheme: DefaultTheme = {
  ...baseTheme,
  // Colors
  accentColor: '#E89456',
  accentColorReversed: '#DAA520',
  mainBackgroundColor: '#222529',
  grayColor: 'rgba(191, 191, 191, 0.59)',
  textColor: '#fff',
  textColorReversed: '#000',
  accentBackgroundColor: 'rgba(232, 146, 84, 0.09)',
  backgroundColor: '#454B52',
  backgroundColorTransparent: 'rgba(70,70,77,.7)',

  // Code colors
  commentColor: '#78787D',
  keywordColor: '#E89456',
  numberColor: '#A897FF',
  stringColor: '#bae67e',
  attrValueColor: '#bae67e',
  punctuationColor: '#89DDFF',
  booleanColor: '#A897FF',
  functionColor: '#DC7572',
  builtinColor: '#F283B6',
  operatorColor: '#AEC1DF',
  classNameColor: '#C2AFF0',
};

export { lightTheme, darkTheme };
