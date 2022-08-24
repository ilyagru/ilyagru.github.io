import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import { getSrc } from 'gatsby-plugin-image';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { DateText, Separator } from '../components/Typography.components';

type Props = PageProps & {
  data: any;
  pageContext: any;
};

function BlogPostTemplate({ data, pageContext, location }: Props) {
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${data.markdownRemark.frontmatter.title} by ${data.site.siteMetadata.author} ${location.href}`
  )}`;
  const reportMistakeUrl = 'https://github.com/ilyagru/ilyagru.github.io/issues/new?labels=mistake';

  const metaImage = data.markdownRemark.frontmatter.featuredImage
    ? getSrc(data.markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData)
    : '';

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.summary || data.markdownRemark.excerpt}
        image={metaImage}
      />
      <article>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <DateText respectTopMargin={false}>{data.markdownRemark.frontmatter.date}</DateText>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </article>
      <br />
      <p>
        <iframe
          src="https://github.com/sponsors/ilyagru/button"
          title="Sponsor ilyagru"
          height="32"
          width="115"
          style={{
            border: 0,
            minHeight: '32px',
            width: '115px',
            height: '32px',
            marginBottom: 0,
            verticalAlign: 'middle',
          }}
        />
        {' | '}
        <a href={twitterShareUrl} target="_blank" rel="nofollow noopener noreferrer">
          Tweet this
        </a>
        {' | '}
        <a href={reportMistakeUrl} target="_blank" rel="nofollow noopener noreferrer">
          Report a mistake
        </a>
      </p>
      <Separator />
      <Bio />
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          {pageContext.previous && (
            <Link to={`/${pageContext.previous.fields.slug}`} rel="prev">
              ← {pageContext.previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {pageContext.next && (
            <Link to={`/${pageContext.next.fields.slug}`} rel="next">
              {pageContext.next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
}

export default BlogPostTemplate;

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 300)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        summary
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 630, layout: FIXED)
          }
        }
      }
    }
  }
`;
