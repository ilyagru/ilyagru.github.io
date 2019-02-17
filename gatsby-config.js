module.exports = {
  siteMetadata: {
    title: `Gruzhevstasy`,
    author: `Ilya Gruzhevski`,
    description: `A diversified developer who lives and works in Europe building nice things. On this blog I post not only programming stuff. You can also find me on GitHub.`,
    siteUrl: `https://ilyagru.github.io`,
    social: {
      github: `ilyagru`,
    },
  },
  plugins: [
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
          `gatsby-remark-external-links`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `UA-111438825-1`, // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
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
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${edge.node.fields.slug}`,
                custom_elements: [{ 'content:encoded': edge.node.html }],
                enclosure: {
                  url: `${site.siteMetadata.siteUrl}${edge.node.frontmatter.featuredImage.publicURL}`.replace('https', 'http'),
                  type: 'image/png',
                },
              });
            });
          },
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
                      featuredImage {
                        publicURL
                      }
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Gruzhevstasy RSS feed",
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gruzhevstasy`,
        short_name: `Gruzhevstasy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#DAA520`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
        legacy: true,
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
