import React from 'react';
import PT from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              // TODO: Check if icons are generated correctly
              // <link rel="apple-touch-icon" href="assets/apple-touch-icon-76.png">
              // <link rel="apple-touch-icon" sizes="76x76" href="assets/apple-touch-icon-76.png">
              // <link rel="apple-touch-icon" sizes="120x120" href="assets/apple-touch-icon-120.png">
              // <link rel="apple-touch-icon" sizes="152x152" href="assets/apple-touch-icon-152.png">
              // <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon-180.png">
              // <link rel="icon" sizes="192x192" href="assets/apple-touch-icon-192.png"></link>
            ].concat(keywords.length > 0 ? {
              name: `keywords`,
              content: keywords.join(`, `),
            } : []).concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PT.string,
  lang: PT.string,
  meta: PT.array,
  keywords: PT.arrayOf(PT.string),
  title: PT.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
