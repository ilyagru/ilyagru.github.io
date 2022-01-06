import React from 'react';
import styled, { css } from 'styled-components';
import { rhythm } from '../utils/typography';

const SwitchInput = styled.input`
  cursor: pointer;
  height: 0;
  width: 0;
  display: none;
`;

const SwitchTrack = styled.label`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 70px;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.accentColor};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

type SwitchCircleProps = {
  isChecked: boolean;
};

const SwitchCircle = styled.span<SwitchCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  border-radius: 46px;
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme }) => theme.accentColor};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  z-index: 1;

  ${css<SwitchCircleProps>`
    ${({ isChecked }) => (isChecked ? 'left: 44px;' : '')}
  `}
`;

type SwitchTextProps = {
  isChecked: boolean;
};

const SwitchText = styled.span<SwitchTextProps>`
  font-size: ${rhythm(7 / 16)};
  font-weight: 300;
  position: absolute;
  right: ${({ isChecked }) => (isChecked ? 32 : 10)}px;
  text-align: center;
  vertical-align: center;
  color: ${({ theme }) => theme.textColor};
  transition: ${({ theme }) => theme.transition};
`;

type Props = {
  onLabel: string;
  offLabel: string;
  onToggle: () => void;
  isOn: boolean;
};

function Switch({ onLabel, offLabel, onToggle, isOn }: Props) {
  return (
    <>
      <SwitchInput id="switch" onChange={onToggle} type="checkbox" />
      <SwitchTrack htmlFor="switch">
        <SwitchCircle isChecked={isOn} />
        <SwitchText isChecked={isOn}>{isOn ? onLabel : offLabel}</SwitchText>
      </SwitchTrack>
    </>
  );
}

export default Switch;
