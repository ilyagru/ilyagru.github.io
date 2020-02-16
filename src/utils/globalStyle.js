import { createGlobalStyle } from 'styled-components';
import { rhythm } from './typography';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.blackColor};
    background-color: ${({ theme }) => theme.mainBackgroundColor};
  }
  ::selection {
    background: ${({ theme }) => theme.accentBackgroundColor};
  }
  html {
    overflow-x: hidden;
  }
  body {
    overflow-x: hidden;
  }
  h4 {
    letter-spacing: inherit;
    text-transform: inherit;
  }
  a.gatsby-resp-image-link {
    box-shadow: none;
  }
  .gatsby-resp-image-background-image, .gatsby-resp-image-image {
    border-radius: ${({ theme }) => theme.radius};
  }
  a {
    color: ${({ theme }) => theme.accentColor};
    transition: ${({ theme }) => theme.transition};
  }
  button {
    display: inline-block;
    border: none;
    padding: ${rhythm(2.9 / 16)};
    font-size: 1rem;
    line-height: 1rem;
    border-radius: ${({ theme }) => theme.radius};
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  },
  button:active {
    border-color: ${({ theme }) => theme.blackColor};
  }
  blockquote {
    color: ${({ theme }) => theme.grayColor};
  }
  hr: {
    border-radius: ${({ theme }) => theme.radius};
  }
  iframe {
    border: 0;
    border-radius: ${({ theme }) => theme.radius};
    width: 100%;
    min-height: 450px;
  }
  pre {
    background: hsla(0,0%,0%,0.04);
    background-color: ${({ theme }) => theme.backgroundColor};
    margin: 0;
    margin-bottom: ${rhythm(1)};
    border-radius: ${({ theme }) => theme.radius};
    overflow: auto;
    word-wrap: normal;
    padding: ${rhythm(1)};
    line-height: 1.42;
  }
  pre code {
     background: none;
     line-height: 1.42;
  }
  code .keyword {
    color: ${({ theme }) => theme.accentColor};
  }
  code .string {
    color: ${({ theme }) => theme.greenColor};
  }
  code .comment {
    color: ${({ theme }) => theme.grayColor};
  }
  code .number {
    color: ${({ theme }) => theme.violetColor};
  }
  code .boolean {
    color: ${({ theme }) => theme.violetColor};
  }
  code .function {
    color: ${({ theme }) => theme.redColor};
  }
  code .builtin {
    color: ${({ theme }) => theme.blueColor};
  }
`;

export default GlobalStyle;
