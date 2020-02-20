import styled, { css } from 'styled-components';
import posed from 'react-pose';

import { isBrowserChrome, getBodyHeight, getVisibleBodyHeight } from '../utils/window';

const navContainerHeight = () => {
  const visibleBodyHeight = getVisibleBodyHeight();
  const bodyHeight = getBodyHeight();

  return bodyHeight < visibleBodyHeight ? visibleBodyHeight : bodyHeight;
};

const AnimatedNavContainer = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 300,
      x: { type: 'spring', stiffness: 400, damping: 1000 },
    },
  },
  exit: {
    x: 300,
    opacity: 0.9,
    transition: {
      duration: 300,
      x: { type: 'spring', stiffness: 100, damping: 1000 },
    },
  },
});

export const NavContainer = styled(AnimatedNavContainer)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: ${({ theme }) => `${theme.radius} 0 0 ${theme.radius}`};
  box-shadow: -2px 0px 5px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  min-width: 300px;
  overflow: hidden;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          height: ${navContainerHeight()}px;
          touch-action: none;

          // Add the Blur effect for Safari
          ${isBrowserChrome()
            ? css`
                background-color: ${({ theme }) => theme.backgroundColor};
              `
            : css`
                backdrop-filter: saturate(180%) blur(20px);
                background-color: ${({ theme }) => theme.backgroundColorTransparent};
              `}
        `
      : css``}
`;

export const Nav = styled.nav`
  margin-top: calc(${getVisibleBodyHeight()}px / 2 - 78px);
`;

export const NavList = styled.ol`
  list-style-type: none;
  margin-left: 0;
`;

export const NavLink = styled.li``;
