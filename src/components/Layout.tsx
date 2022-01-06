import React, { ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Navbar from './Navbar';
import MenuButton from './MenuButton';
import { LayoutContainer, HeaderContainer, Title, TitleSecondary, TitleLink } from './Layout.components';
import GlobalStyle from '../utils/globalStyle';
import useTheme from '../hooks/useTheme';

type Props = {
  title: string;
  children: ReactElement | ReactElement[];
  location: Location;
};

function Layout({ title, children, location }: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme, isLight } = useTheme();

  const rootPath = `${__PATH_PREFIX__}/`;
  const isHome = location.pathname === rootPath;

  return (
    <ThemeProvider theme={theme}>
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
            <MenuButton
              isMenuOpen={isMenuOpen}
              onClick={() => setMenuOpen(!isMenuOpen)}
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
            />
          </HeaderContainer>
          <Navbar isMenuOpen={isMenuOpen} toggleTheme={toggleTheme} isLight={isLight} />
        </header>
        <main>{children}</main>
        <footer>
          <TitleLink title={`${title} `} />
          &copy; {new Date().getFullYear()}, from Europe with 🧡
        </footer>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default Layout;
