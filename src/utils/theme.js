const baseTheme = {
  // Sizes
  radius: '3px',
  // Animations
  transition: 'all 0.3s ease',
  bodyTransition: 'background 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
  // Fonts
  montserratFont: 'Montserrat, sans-serif',
  merriweatherFont: 'Merriweather, sans-serif',
};

const lightTheme = {
  ...baseTheme,
  // Colors
  mainBackgroundColor: '#fff',
  accentColor: '#DAA520',
  grayColor: 'rgba(0,0,0,0.59)',
  textColor: '#000',
  textColorReversed: '#fff',
  greenColor: '#86B300',
  violetColor: '#A37ACC',
  blueColor: '#399EE6',
  redColor: '#F28779',
  accentBackgroundColor: '#FFFAEF',
  backgroundColor: 'rgb(248, 248, 250)',
  backgroundColorTransparent: 'rgba(248,248,255,.7)',
};

const darkTheme = {
  ...baseTheme,
  // Colors
  mainBackgroundColor: '#222529',
  accentColor: '#E89456',
  grayColor: 'rgba(191, 191, 191, 0.59)',
  textColor: '#fff',
  textColorReversed: '#000',
  greenColor: '#86B300',
  violetColor: '#A37ACC',
  blueColor: '#399EE6',
  redColor: '#F28779',
  accentBackgroundColor: 'rgba(232, 146, 84, 0.09)',
  backgroundColor: '#454B52',
  backgroundColorTransparent: 'rgba(70,70,77,.7)',
};

export { lightTheme, darkTheme };
