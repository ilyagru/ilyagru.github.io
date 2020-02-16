import React, { useState } from 'react';
import PT from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Navbar from './Navbar';
import MenuButton from './MenuButton';
import { LayoutContainer, HeaderContainer, Title, TitleSecondary, TitleLink } from './Layout.components';
import { lightTheme } from '../utils/theme';
import GlobalStyle from '../utils/globalStyle';

const Layout = ({ title, children, location }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const rootPath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === rootPath;

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <header>
          <HeaderContainer isHome={isHome}>
            {isHome ? (
              <Title>
                <TitleLink title={title} />
              </Title>
            ) : (
              <TitleSecondary>
                <TitleLink title={title} />
              </TitleSecondary>
            )}
            <MenuButton isMenuOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)} />
          </HeaderContainer>
          <Navbar isMenuOpen={isMenuOpen} />
        </header>
        <main>{children}</main>
        <footer>
          <TitleLink title={`${title} `} />
          &copy; {new Date().getFullYear()}, from Europe with
          {` `}
          🧡
        </footer>
      </LayoutContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  title: PT.string.isRequired,
  children: PT.oneOfType([PT.node, PT.arrayOf(PT.node)]).isRequired,
  location: PT.shape({
    pathname: PT.string.isRequired,
  }),
};

export default Layout;
