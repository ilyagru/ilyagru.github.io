import styled from 'styled-components';

export const VideoContainer = styled.div`
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  line-height: 0;
  text-aling: center;
  display: inline;
`;

export const HTML5Video = styled.video`
  max-width: 100%;
  max-height: 600px;
`;
