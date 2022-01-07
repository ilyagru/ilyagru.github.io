import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { DateText } from '../components/Typography.components';
import { rhythm } from '../utils/typography';

type Props = PageProps & {
  data: any;
};

function BlogIndex({ data, location }: Props) {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO
        title="All posts"
        keywords={[
          'blog',
          'frontend',
          'javascript',
          'react',
          'swift',
          'ios',
          'life',
          'development',
          'design',
        ]}
      />
      <Bio />
      {data.allMarkdownRemark.edges.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <article key={node.fields.slug}>
            <h3 style={{ marginBottom: rhythm(1 / 4) }}>
              <Link style={{ boxShadow: 'none' }} to={`/${node.fields.slug}`}>
                {title}
              </Link>
            </h3>
            <DateText>{node.frontmatter.date}</DateText>
            <p dangerouslySetInnerHTML={{ __html: node.frontmatter.summary || node.excerpt }} />
          </article>
        );
      })}
    </Layout>
  );
}

export default BlogIndex;

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { source: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            summary
          }
        }
      }
    }
  }
`;
