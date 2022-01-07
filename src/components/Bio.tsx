import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { rhythm } from '../utils/typography';

type Props = {
  slug?: string;
};

function Bio({ slug = '' }: Props) {
  let done: string;

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
      render={(data) => {
        const { author, social } = data.site.siteMetadata;

        return (
          <aside
            style={{
              display: 'flex',
              marginBottom: rhythm(2.5),
            }}
          >
            <GatsbyImage
              image={data.avatar.childImageSharp.gatsbyImageData}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 80,
                borderRadius: '100%',
              }}
              imgStyle={{
                borderRadius: '50%',
              }}
            />
            <p>
              {done} by <strong>{author}</strong>, a senior developer with diversified experience in different
              domains who lives and works in Europe building nice things. On this blog I post not only
              programming stuff. You can also find me on{' '}
              <a
                href={`https://github.com/${social.github}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                GitHub
              </a>{' '}
              or{' '}
              <a
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Twitter
              </a>
              .
            </p>
          </aside>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 80, height: 80, layout: FIXED)
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
          twitter
        }
      }
    }
  }
`;

export default Bio;
