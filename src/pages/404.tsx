import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';

type Props = PageProps & {
  data: any;
};

function NotFoundPage({ data, location }: Props) {
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SEO title="404 - Not Found" />
      <h1>Oh là là! Not Found.</h1>
      <GatsbyImage
        image={data.notFoundImage.childImageSharp.gatsbyImageData}
        alt="Page not found"
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <p>
        You just hit a route that doesn&#39;t exist... Try <Link to="/">Home</Link>.
      </p>
    </Layout>
  );
}

export default NotFoundPage;

export const notFoundQuery = graphql`
  query NotFoundQuery {
    notFoundImage: file(absolutePath: { regex: "/not-found.png/" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
