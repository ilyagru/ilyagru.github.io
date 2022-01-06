import React from 'react';
import styled, { css } from 'styled-components';
import { enableScroll, disableScroll } from '../utils/window';

type BaseButtonProps = {
  isMenuOpen: boolean;
};

const BaseButton = styled.button<BaseButtonProps>`
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

type Props = {
  isMenuOpen?: boolean;
  onClick: () => void;
};

function MenuButton({ isMenuOpen = false, onClick }: Props) {
  if (isMenuOpen) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    <BaseButton isMenuOpen={isMenuOpen} onClick={onClick}>
      menu
    </BaseButton>
  );
}

export default MenuButton;
