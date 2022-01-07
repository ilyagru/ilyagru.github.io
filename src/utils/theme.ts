import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    radius: string;
    transition: string;
    bodyTransition: string;
    navbarCardBoxShadow: string;
    cardBoxShadow: string;
    montserratFont: string;
    merriweatherFont: string;
    oxygenMonoFont: string;

    // Colors
    accentColor: string;
    accentColorString: string;
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
  accentColorString: '#DAA520',
  accentColor: 'var(--accent-color)',
  mainBackgroundColor: 'var(--main-background-color)',
  grayColor: 'var(--gray-color)',
  textColor: 'var(--text-color)',
  textColorReversed: 'var(--text-color-reversed)',
  accentBackgroundColor: 'var(--accent-background-color)',
  backgroundColor: 'var(--background-color)',
  backgroundColorTransparent: 'var(--background-color-transparent)',

  // Code colors
  commentColor: 'var(--comment-color)',
  keywordColor: 'var(--keyword-color)',
  numberColor: 'var(--number-color)',
  stringColor: 'var(--string-color)',
  attrValueColor: 'var(--attr-value-color)',
  punctuationColor: 'var(--punctuation-color)',
  booleanColor: 'var(--boolean-color)',
  functionColor: 'var(--function-color)',
  builtinColor: 'var(--builtin-color)',
  operatorColor: 'var(--operator-color)',
  classNameColor: 'var(--class-name-color)',
};

const darkTheme: DefaultTheme = {
  ...baseTheme,
  // Colors
  accentColorString: '#E89456',
  accentColor: 'var(--accent-color)',
  mainBackgroundColor: 'var(--main-background-color)',
  grayColor: 'var(--gray-color)',
  textColor: 'var(--text-color)',
  textColorReversed: 'var(--text-color-reversed)',
  accentBackgroundColor: 'var(--accent-background-color)',
  backgroundColor: 'var(--background-color)',
  backgroundColorTransparent: 'var(--background-color-transparent)',

  // Code colors
  commentColor: 'var(--comment-color)',
  keywordColor: 'var(--keyword-color)',
  numberColor: 'var(--number-color)',
  stringColor: 'var(--string-color)',
  attrValueColor: 'var(--attr-value-color)',
  punctuationColor: 'var(--punctuation-color)',
  booleanColor: 'var(--boolean-color)',
  functionColor: 'var(--function-color)',
  builtinColor: 'var(--builtin-color)',
  operatorColor: 'var(--operator-color)',
  classNameColor: 'var(--class-name-color)',
};

export { lightTheme, darkTheme };
