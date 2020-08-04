import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';
import { PoseGroup } from 'react-pose';

import Switch from './Switch';
import { NavContainer, Nav, NavList, NavLink } from './Navbar.components';

const Navbar = ({ isMenuOpen, toggleTheme, isLight }) => {
  const theme = useContext(ThemeContext);

  const activeLinkStyle = {
    boxShadow: 'none',
    color: theme.textColor,
  };

  return (
    <StaticQuery
      query={navbarQuery}
      render={(data) => {
        const { siteUrl } = data.site.siteMetadata;

        return (
          <PoseGroup>
            {isMenuOpen && (
              <NavContainer key="nav-container" isMenuOpen={isMenuOpen} pose={isMenuOpen ? 'enter' : 'exit'}>
                <Nav>
                  <NavList>
                    <NavLink>
                      <Link activeStyle={activeLinkStyle} to="/">
                        All Posts
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link activeStyle={activeLinkStyle} to="/built-things">
                        What I Built
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link activeStyle={activeLinkStyle} to="/my-music">
                        What I Listen To
                      </Link>
                    </NavLink>
                    <NavLink>
                      <Link activeStyle={activeLinkStyle} to="/contact">
                        Contact
                      </Link>
                    </NavLink>
                    <NavLink>
                      <a href={`feed:${siteUrl}/rss.xml`} target="_blank" rel="noopener noreferrer">
                        RSS feed
                      </a>
                    </NavLink>
                    <Switch onToggle={toggleTheme} isOn={!isLight} />
                  </NavList>
                </Nav>
              </NavContainer>
            )}
          </PoseGroup>
        );
      }}
    />
  );
};

Navbar.defaultProps = {
  isMenuOpen: false,
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool,
  isLight: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

const navbarQuery = graphql`
  query NavbarQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default Navbar;
