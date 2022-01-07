import { DefaultTheme } from 'styled-components';

// In case of color changes,
// they should be updated in the global styles as well.
// import GlobalStyle from './globalStyle';

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
  accentColor: 'var(--accent-color, #DAA520)',
  mainBackgroundColor: 'var(--main-background-color, #fff)',
  grayColor: 'var(--gray-color, rgba(0,0,0,0.59))',
  textColor: 'var(--text-color, #000)',
  textColorReversed: 'var(--text-color-reversed, #fff)',
  accentBackgroundColor: 'var(--accent-background-color, #FFFAEF)',
  backgroundColor: 'var(--background-color, rgb(248, 248, 250))',
  backgroundColorTransparent: 'var(--background-color-transparent, rgba(248,248,255,.7))',

  // Code colors
  commentColor: 'var(--comment-color, #B5B5B6)',
  keywordColor: 'var(--keyword-color, #DAA520)',
  numberColor: 'var(--number-color, #A37ACC)',
  stringColor: 'var(--string-color, #AAD273)',
  attrValueColor: 'var(--attr-value-color, #AAD273)',
  punctuationColor: 'var(--punctuation-color, #8DADE1)',
  booleanColor: 'var(--boolean-color, #A37ACC)',
  functionColor: 'var(--function-color, #F28779)',
  builtinColor: 'var(--builtin-color, #E8905B)',
  operatorColor: 'var(--operator-color, #819ECD)',
  classNameColor: 'var(--class-name-color, #6A4C93)',
};

const darkTheme: DefaultTheme = {
  ...baseTheme,
  // Colors
  accentColorString: '#E89456',
  accentColor: 'var(--accent-color, #E89456)',
  mainBackgroundColor: 'var(--main-background-color, #222529)',
  grayColor: 'var(--gray-color, rgba(191, 191, 191, 0.59))',
  textColor: 'var(--text-color, #fff)',
  textColorReversed: 'var(--text-color-reversed, #000)',
  accentBackgroundColor: 'var(--accent-background-color, rgba(232, 146, 84, 0.09))',
  backgroundColor: 'var(--background-color, #454B52)',
  backgroundColorTransparent: 'var(--background-color-transparent, rgba(70,70,77,.7))',

  // Code colors
  commentColor: 'var(--comment-color, #78787D)',
  keywordColor: 'var(--keyword-color, #E89456)',
  numberColor: 'var(--number-color, #A897FF)',
  stringColor: 'var(--string-color, #bae67e)',
  attrValueColor: 'var(--attr-value-color, #bae67e)',
  punctuationColor: 'var(--punctuation-color, #89DDFF)',
  booleanColor: 'var(--boolean-color, #A897FF)',
  functionColor: 'var(--function-color, #DC7572)',
  builtinColor: 'var(--builtin-color, #F283B6)',
  operatorColor: 'var(--operator-color, #AEC1DF)',
  classNameColor: 'var(--class-name-color, #C2AFF0)',
};

export { lightTheme, darkTheme };
