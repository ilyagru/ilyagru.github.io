import React from 'react';
import PT from 'prop-types';
import styled, { css } from 'styled-components';

import constants from '../utils/constants';
import { enableScroll, disableScroll } from '../utils/window';

const BaseButton = styled.button`
  border: 1px solid ${constants.accentColor};
  background-color: transparent;
  outline: 0;
  font-family: ${constants.merriweatherFont};
  transition: ${constants.transition};
  position: relative;
  z-index: 20;
  color: ${constants.blackColor};
  font-weight: 800;

  ${({ isMenuOpen }) => isMenuOpen ? css`
    transform: translate(15px) rotate(-90deg);
    background-color: ${constants.accentColor};
    color: ${constants.whiteColor};
  ` : css`
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
