import React from 'react';
import PT from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio({ slug }) {
  let done;
  switch (slug) {
    case 'my-music':
      done = 'Hand-picked';
      break;
    case 'built-things':
      done = 'Created & designed';
      break;
    case 'contact':
      done = 'Created';
      break;
    default:
      done = 'Written';
      break;
  }

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;

        return (
          <aside
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 80,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              {done} by <strong>{author}</strong>, a diversified developer who lives and works in Europe
              building nice things. On this blog I post not only programming stuff. You can also find me on
              {` `}
              <a
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </aside>
        );
      }}
    />
  );
}

Bio.defaultProps = {
  slug: '',
};

Bio.propTypes = {
  slug: PT.string,
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`;

export default Bio;
