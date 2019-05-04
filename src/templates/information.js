import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Separator } from '../components/Typography.components';

class InformationTemplate extends React.Component {
  render() {
    const information = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const slug = this.props.pageContext.slug;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={information.frontmatter.title} description={information.frontmatter.summary || information.excerpt} />
        <h1>{information.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: information.html }} />
        <Separator />
        <Bio slug={slug} />
      </Layout>
    );
  }
}

export default InformationTemplate;

export const informationQuery = graphql`
  query InformationBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 300)
      frontmatter {
        title
        summary
      }
    }
  }
`;
