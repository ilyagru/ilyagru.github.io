import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import posed, { PoseGroup } from 'react-pose';

import constants from '../utils/constants';
import { isBrowserChrome, getBodyHeight, getVisibleBodyHeight } from '../utils/window';

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

const navContainerHeight = () => {
  const visibleBodyHeight = getVisibleBodyHeight();
  const bodyHeight = getBodyHeight();

  return bodyHeight < visibleBodyHeight ? visibleBodyHeight : bodyHeight;
};

const NavContainer = styled(AnimatedNavContainer)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: ${constants.backgroundColor};
  border-radius: ${constants.radius} 0 0 ${constants.radius};
  box-shadow: -2px 0px 5px -1px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  min-width: 300px;
  overflow: hidden;

  ${({ isMenuOpen }) => isMenuOpen ? css`
    height: ${navContainerHeight()}px;
    touch-action: none;

    // Add the Blur effect for Safari
    ${isBrowserChrome() ? css`
      background-color: ${constants.backgroundColor};
    ` : css`
      backdrop-filter: saturate(180%) blur(20px);
      background-color: ${constants.backgroundColorTransparent};
    `}
  ` : css`
  `}
`;

const Nav = styled.nav`
  margin-top: calc(${getVisibleBodyHeight()}px / 2 - 78px);
`;

const NavList = styled.ol`
  list-style-type: none;
  margin-left: 0;
`;

const NavLink = styled.li``;

const activeLinkStyle = {
  boxShadow: 'none',
  color: constants.blackColor,
};

function Navbar({ isMenuOpen }) {
  return (
    <PoseGroup>
      {isMenuOpen &&
        <NavContainer
          key="nav-container"
          isMenuOpen={isMenuOpen}
          pose={isMenuOpen ? 'enter' : 'exit'}
        >
          <Nav >
            <NavList>
              <NavLink><Link activeStyle={activeLinkStyle} to="/">All Posts</Link></NavLink>
              <NavLink><Link activeStyle={activeLinkStyle} to="/built-things">What I Built</Link></NavLink>
              <NavLink><Link activeStyle={activeLinkStyle} to="/my-music">What I Listen To</Link></NavLink>
              <NavLink><Link activeStyle={activeLinkStyle} to="/contact">Contact</Link></NavLink>
            </NavList>
          </Nav>
        </NavContainer>
      }
    </PoseGroup>
  );
}

Navbar.defaultProps = {
  isMenuOpen: false,
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool,
};

export default Navbar;
