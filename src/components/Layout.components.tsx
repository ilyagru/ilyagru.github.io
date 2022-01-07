import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { rhythm, scale } from '../utils/typography';

export const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

type TitleLinkProps = {
  title: string;
};

export function TitleLink({ title }: TitleLinkProps) {
  return (
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'none',
      }}
      to="/"
    >
      {title}
    </Link>
  );
}

type HeaderContainerProps = {
  isHome: boolean;
};

export const HeaderContainer = styled.div<HeaderContainerProps>`
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
  font-family: ${({ theme }) => theme.montserratFont};
  margin-top: 0;
  margin-bottom: 0;
  color: ${({ theme }) => theme.accentColor};
`;
