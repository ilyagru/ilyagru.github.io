import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components';

import { enableScroll, disableScroll } from '../utils/window';

const BaseButton = styled.button`
  border: 1px solid ${({ theme }) => theme.accentColor};
  background-color: transparent;
  outline: 0;
  font-family: ${({ theme }) => theme.merriweatherFont};
  transition: ${({ theme }) => theme.transition};
  position: relative;
  z-index: 20;
  color: ${({ theme }) => theme.textColor};
  font-weight: 800;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          transform: translate(15px) rotate(-90deg);
          background-color: ${({ theme }) => theme.accentColor};
          color: ${({ theme }) => theme.textColorReversed};
        `
      : css`
          transform: rotate(0deg);
        `}
`;

function MenuButton({ isMenuOpen, onClick }) {
  isMenuOpen ? disableScroll() : enableScroll();

  return (
    <BaseButton isMenuOpen={isMenuOpen} onClick={onClick}>
      menu
    </BaseButton>
  );
}

MenuButton.defaultProps = {
  isMenuOpen: false,
};

MenuButton.propTypes = {
  isMenuOpen: PT.bool,
  onClick: PT.func.isRequired,
};

export default MenuButton;
