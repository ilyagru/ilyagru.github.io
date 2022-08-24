module.exports = {
  siteMetadata: {
    title: `ilyagru`,
    author: `Ilya Gruzhevski`,
    description: `A diversified developer who lives and works in Europe building nice things. On this blog I post not only programming stuff. You can also find me on GitHub.`,
    siteUrl: `https://ilyagru.com`,
    social: {
      github: `ilyagru`,
      twitter: `ilyagruu`,
    },
  },
  plugins: [
    // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
    // don't need to define it here (just if you need to change the options)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/information`,
        name: `information`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: `+++ `,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `UA-111438825-1`,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) => {
                const enclosure = edge.node.frontmatter.featuredImage
                  ? {
                      url: `${site.siteMetadata.siteUrl}${edge.node.frontmatter.featuredImage.publicURL}`.replace(
                        'https',
                        'http'
                      ),
                      type: 'image/png',
                    }
                  : undefined;

                return {
                  ...edge.node.frontmatter,
                  description: edge.node.frontmatter.summary || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                  enclosure,
                };
              }),
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                filter: { fields: { source: { eq: "blog" } } }
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 300)
                    html
                    fields {
                      slug
                      source
                    }
                    frontmatter {
                      title
                      date
                      summary
                      featuredImage {
                        publicURL
                      }
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'ilyagru RSS feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ilyagru`,
        short_name: `ilyagru`,
        start_url: `/`,
        theme_color: '#263d34',
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
        legacy: true,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
  ],
};
