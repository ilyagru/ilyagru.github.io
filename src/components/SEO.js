import React from 'react';
import PT from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        const metaImage = image ? [{
          property: `og:image`,
          content: image,
        }, {
          property: `twitter:image`,
          content: image,
        }] : [];

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
              {
                name: `google-site-verification`,
                content: `KGqdfp9zu891keaiGwHM4etp_F_vU-Wav4LfQ3nBamc`,
              },
            ]
            .concat(keywords.length > 0 ? { name: `keywords`, content: keywords.join(`, `) } : [])
            .concat(meta)
            .concat(metaImage)}
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
  image: null,
};

SEO.propTypes = {
  description: PT.string,
  lang: PT.string,
  meta: PT.array,
  keywords: PT.arrayOf(PT.string),
  title: PT.string.isRequired,
  image: PT.string,
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
