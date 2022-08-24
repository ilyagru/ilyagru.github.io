import { createGlobalStyle } from 'styled-components';
import { rhythm } from './typography';

const GlobalStyle = createGlobalStyle`
  .light {
    --accent-color: #263d34; /* goodwood green */
    --main-background-color: #fff;
    --gray-color: rgba(0,0,0,0.59);
    --text-color: #000;
    --text-color-reversed: #fff;
    --accent-background-color: rgba(38,61,52, 0.2);
    --background-color: rgb(248, 248, 250);
    --background-color-transparent: rgba(248,248,255,.7);

    --comment-color: #B5B5B6;
    --keyword-color: #DAA520;
    --number-color: #A37ACC;
    --string-color: #263d34;
    --attr-value-color: #263d34;
    --punctuation-color: #8DADE1;
    --boolean-color: #A37ACC;
    --function-color: #F28779;
    --builtin-color: #E8905B;
    --operator-color: #819ECD;
    --class-name-color: #6A4C93;
  }

  .dark {
    --accent-color: #6fa590;
    --main-background-color: #222529;
    --gray-color: rgba(191, 191, 191, 0.59);
    --text-color: #fff;
    --text-color-reversed: #000;
    --accent-background-color: rgba(111,165,144, 0.2);
    --background-color: #454B52;
    --background-color-transparent: rgba(70,70,77,.7);

    --comment-color: #78787D;
    --keyword-color: #E89456;
    --number-color: #A897FF;
    --string-color: #6fa590;
    --attr-value-color: #6fa590;
    --punctuation-color: #89DDFF;
    --boolean-color: #A897FF;
    --function-color: #DC7572;
    --builtin-color: #F283B6;
    --operator-color: #AEC1DF;
    --class-name-color: #C2AFF0;
  }

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
  .gatsby-highlight {
    border-radius: ${({ theme }) => theme.radius};
    padding: ${rhythm(1)};
    overflow: auto;
    margin-bottom: ${rhythm(1)};
    background-color: ${({ theme }) => theme.backgroundColorTransparent};
    box-shadow: ${({ theme }) => theme.cardBoxShadow};
  }
  pre {
    margin: 0;
    border-radius: ${({ theme }) => theme.radius};
    word-wrap: normal;
    line-height: 1.42;
    float: left;
    min-width: 100%;
    padding-right: ${rhythm(1)};
  }
  code {
    font-family: ${({ theme }) => theme.oxygenMonoFont};
  }
  p code, li code {
    background-color: ${({ theme }) => theme.backgroundColorTransparent};
    padding: 0 ${rhythm(2.9 / 16)} 0 ${rhythm(2.9 / 16)};
    border-radius: ${({ theme }) => theme.radius};
  }
  pre code {
    line-height: 1.42;
  }
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${({ theme }) => theme.accentBackgroundColor};
    padding-left: calc(${rhythm(1)} - ${rhythm(3 / 16)});
    padding-right: ${rhythm(1)};
    margin-left: ${rhythm(-1)};
    margin-right: ${rhythm(-2)};
    border-left: ${rhythm(3 / 16)} solid ${({ theme }) => theme.accentColor};
  }
  code .keyword, .language-xml .attr-name {
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
  code .function, .language-xml .tag {
    color: ${({ theme }) => theme.functionColor};
  }
  code .builtin {
    color: ${({ theme }) => theme.builtinColor};
  }
  code .punctuation {
    color: ${({ theme }) => theme.punctuationColor};
  }
  code .class-name, .language-xml .prolog {
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
