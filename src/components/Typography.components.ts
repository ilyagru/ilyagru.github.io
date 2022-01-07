import styled from 'styled-components';
import { rhythm, scale } from '../utils/typography';

export const Separator = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

type DateTextProps = {
  respectTopMargin?: boolean;
};

export const DateText = styled.small<DateTextProps>`
  ${{ ...scale(-1 / 5) }};
  margin-top: ${({ respectTopMargin = true }) => (respectTopMargin ? '' : rhythm(-1))};
  font-style: italic;
  display: block;
`;
