import React from 'react';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404 - Not Found" />
        <h1>Oh là là! Not Found.</h1>
        <Image
          fluid={data.notFoundImage.childImageSharp.fluid}
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
}

export default NotFoundPage;

export const notFoundQuery = graphql`
  query {
    notFoundImage: file(absolutePath: { regex: "/not-found.png/" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
