import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Separator } from '../components/Typography.components';

type Props = PageProps & {
  data: any;
  pageContext: any;
};

function InformationTemplate({ data, pageContext, location }: Props) {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.summary || data.excerpt}
      />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <Separator />
      <Bio slug={pageContext.slug} />
    </Layout>
  );
}

export default InformationTemplate;

export const informationQuery = graphql`
  query InformationBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
