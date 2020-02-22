import { createGlobalStyle } from 'styled-components';
import { rhythm } from './typography';

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${({ theme }) => theme.accentBackgroundColor};
  }
  html {
    overflow-x: hidden;
  }
  body {
    overflow-x: hidden;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.mainBackgroundColor};
    transition: ${({ theme }) => theme.bodyTransition};
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
    border-color: ${({ theme }) => theme.textColor};
  }
  blockquote {
    color: ${({ theme }) => theme.grayColor};
    border-left-color: ${({ theme }) => theme.grayColor};
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
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.radius};
  }
  pre {
    background: hsla(0,0%,0%,0.04);
    background-color: ${({ theme }) => theme.backgroundColorTransparent};
    margin: 0;
    margin-bottom: ${rhythm(1)};
    border-radius: ${({ theme }) => theme.radius};
    overflow: auto;
    word-wrap: normal;
    padding: ${rhythm(1)};
    line-height: 1.42;
    box-shadow: ${({ theme }) => theme.cardBoxShadow};

  }
  code {
    font-family: ${({ theme }) => theme.oxygenMonoFont};
  }
  pre code {
     line-height: 1.42;
  }
  code .keyword {
    color: ${({ theme }) => theme.keywordColor};
  }
  code .string {
    color: ${({ theme }) => theme.stringColor};
  }
  code .comment {
    color: ${({ theme }) => theme.commentColor};
  }
  code .number {
    color: ${({ theme }) => theme.numberColor};
  }
  code .boolean {
    color: ${({ theme }) => theme.booleanColor};
  }
  code .function {
    color: ${({ theme }) => theme.functionColor};
  }
  code .builtin {
    color: ${({ theme }) => theme.builtinColor};
  }
  code .punctuation {
    color: ${({ theme }) => theme.punctuationColor};
  }
  code .class-name {
    color: ${({ theme }) => theme.classNameColor};
  }
  code .operator {
    color: ${({ theme }) => theme.operatorColor};
  }
  code .attr-value {
    color: ${({ theme }) => theme.stringColor};
  }
`;

export default GlobalStyle;
