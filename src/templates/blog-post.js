import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { DateComponent, Separator } from '../components/Typography.components';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const author = this.props.data.site.siteMetadata.author;
    const { previous, next } = this.props.pageContext;
    const twitterShareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${post.frontmatter.title} by ${author} ${this.props.location.href}`);
    const reportMistakeUrl = 'https://github.com/ilyagru/ilyagru.github.io/issues/new?labels=mistake';

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <article>
          <h1>{post.frontmatter.title}</h1>
          <DateComponent>
            {post.frontmatter.date}
          </DateComponent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
        <br />
        <p>
          <a href={twitterShareUrl} target="_blank" rel="nofollow noopener noreferrer">Tweet this</a>
          {' | '}
          <a href={reportMistakeUrl} target="_blank" rel="nofollow noopener noreferrer">Report a mistake</a>
        </p>
        <Separator />
        <Bio />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 300)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
