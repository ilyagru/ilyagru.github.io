import constants from './constants';

export default {
  '::selection': {
    background: constants.accentBackgroundColor,
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    overflowX: 'hidden',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
  },
  '.gatsby-resp-image-background-image, .gatsby-resp-image-image': {
    borderRadius: constants.radius,
  },
  a: {
    color: constants.accentColor,
    transition: constants.transition,
  },
  button: {
    display: 'inline-block',
    border: 'none',
    padding: '5px',
    fontSize: '16px',
    borderRadius: constants.radius,
    lineHeight: '16px',
    margin: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
  },
  'button:active': {
    borderColor: constants.blackColor,
  },
  blockquote: {
    color: constants.grayColor,
  },
  hr: {
    borderRadius: constants.radius,
  },
  iframe: {
    border: 0,
    borderRadius: constants.radius,
    width: '100%',
    minHeight: '450px',
  },
  'pre': {
    backgroundColor: constants.backgroundColor,
  },
  'code .keyword': {
    color: constants.accentColor,
  },
  'code .string': {
    color: constants.greenColor,
  },
  'code .comment': {
    color: constants.grayColor,
  },
  'code .number': {
    color: constants.violetColor,
  },
  'code .boolean': {
    color: constants.blueColor,
  },
};;
