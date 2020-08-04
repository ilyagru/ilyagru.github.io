const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const informationTemplate = path.resolve(`./src/templates/information.js`);

  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
                source
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const items = result.data.allMarkdownRemark.edges;

    // Create blog posts pages.
    const posts = items.filter((item) => item.node.fields.source === 'blog');

    posts.forEach((post, index) => {
      const lastIndex = posts.length - 1;
      const firstIndex = 0;
      const next = index === lastIndex ? null : posts[index + 1].node;
      const previous = index === firstIndex ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          source: post.node.fields.source,
          previous,
          next,
        },
      });
    });

    // Create information pages
    const informations = items.filter((item) => item.node.fields.source === 'information');

    informations.forEach((information, index) => {
      createPage({
        path: information.node.fields.slug,
        component: informationTemplate,
        context: {
          slug: information.node.fields.slug,
          source: information.node.fields.source,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode }).replace(/\//g, '');
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
    createNodeField({
      name: `source`,
      node,
      value: source,
    });
  }
};
