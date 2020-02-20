import React from 'react';
import PT from 'prop-types';
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

const SwitchCircle = styled.span`
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

  ${css`
    ${({ checked }) => (checked ? 'left: 44px;' : '')}
  `}
`;

const SwitchText = styled.span`
  font-size: ${rhythm(7 / 16)};
  font-weight: 300;
  position: absolute;
  right: ${({ checked }) => (checked ? 32 : 10)}px;
  text-align: center;
  vertical-align: center;
  color: ${({ theme }) => theme.textColor};
  transition: ${({ theme }) => theme.transition};
`;

const Switch = ({ onToggle, isOn }) => {
  return (
    <>
      <SwitchInput id={`switch`} checked={isOn} onChange={onToggle} type="checkbox" />
      <SwitchTrack checked={isOn} htmlFor={`switch`}>
        <SwitchCircle checked={isOn}></SwitchCircle>
        <SwitchText checked={isOn}>{isOn ? 'dark' : 'light'}</SwitchText>
      </SwitchTrack>
    </>
  );
};

Switch.propTypes = {
  isOn: PT.bool.isRequired,
};

export default Switch;
