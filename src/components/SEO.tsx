import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { useTheme } from 'styled-components';

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

type Props = {
  description?: string;
  lang?: string;
  meta?: [];
  keywords?: string[];
  title: string;
  image?: string;
};

function SEO({ description, lang = 'en', meta = [], keywords = [], title, image }: Props) {
  const theme = useTheme();

  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = description || data.site.siteMetadata.description;
        const metaImage = image
          ? [
              {
                property: 'og:image',
                content: image,
              },
              {
                property: 'twitter:image',
                content: image,
              },
            ]
          : [];

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'google-site-verification',
                content: 'KGqdfp9zu891keaiGwHM4etp_F_vU-Wav4LfQ3nBamc',
              },
              {
                name: 'theme-color',
                content: theme.accentColorString,
                media: '(prefers-color-scheme: light)',
              },
              {
                name: 'theme-color',
                content: theme.accentColorString,
                media: '(prefers-color-scheme: dark)',
              },
            ]
              .concat(keywords.length > 0 ? { name: 'keywords', content: keywords.join(', ') } : [])
              .concat(meta)
              .concat(metaImage)}
          />
        );
      }}
    />
  );
}

export default SEO;
