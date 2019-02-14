import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography';

export const Separator = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const DateContainer = styled.p`
  ${{...scale(-1 / 5)}};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`;

function DateComponent({ children }) {
  return (
    <DateContainer>
      {children}
    </DateContainer>
  );
}

DateComponent.propTypes = {
  children: PT.string.isRequired,
};

export { DateComponent };
