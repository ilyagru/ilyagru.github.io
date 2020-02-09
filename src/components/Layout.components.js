import React from 'react';
import PT from 'prop-types';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import constants from '../utils/constants';
import { rhythm, scale } from '../utils/typography';

export const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

export const TitleLink = ({ title }) => {
  return (
    <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      {title}
    </Link>
  );
};

TitleLink.propTypes = {
  title: PT.string.isRequired,
};

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ isHome }) =>
    isHome
      ? css`
          margin-bottom: ${rhythm(1.5)};
        `
      : css`
          margin-bottom: ${rhythm(1)};
        `}
`;

export const Title = styled.h1`
  ${{ ...scale(1.5) }};
  margin-bottom: 0;
  margin-top: 0;

  @media (max-width: 600px) {
    ${{ ...scale(1.3) }};
  }
  @media (max-width: 500px) {
    ${{ ...scale(1.1) }};
  }
  @media (max-width: 440px) {
    ${{ ...scale(0.6) }};
  }
`;

export const TitleSecondary = styled.h3`
  font-family: ${constants.montserratFont};
  margin-top: 0;
  margin-bottom: 0;
  color: ${constants.accentColor};
`;
