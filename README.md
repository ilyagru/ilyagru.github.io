# Gruzhevstasy (personal website & blog)

![Status Check](https://github.com/ilyagru/ilyagru.github.io/workflows/Status%20Check/badge.svg) ![Gatsby Publish](https://github.com/ilyagru/ilyagru.github.io/workflows/Gatsby%20Publish/badge.svg) ![version](https://img.shields.io/badge/version-4.1.0-blue)

[ilyagru.github.io](https://ilyagru.github.io)

Uses a custom Gatsby's blog starter. This starter ships with the main Gatsby configuration files you might need to get up and running.

## Quick start

1.  **Start developing**

    ```bash
    npm start
    ```

1.  **Open the source code and start editing**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

1.  **Production**

    ```bash
    npm run build
    ```

1.  **Test locally**

    ```bash
    npm run serve
    ```

    The site is now running at `http://localhost:9000`!

1.  **Run tests**

    ```bash
    npm test
    ```

1.  **Deploy**

    ```bash
    npm run deploy
    ```

    For a repository named like ilyagru.github.io. Deploying automatically by Github Actions on merging to develop.

    Note: In this case you don’t need to specify `--prefix-paths` and your website needs to be pushed to master branch.

## TODO:

- [ ] GraphQL codegen types

  - https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/
  - https://github.com/cometkim/gatsby-plugin-typegen
  - https://specific.solutions.limited/blog/gatsby-configuration-in-typescript
  - https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
  - https://www.graphql-code-generator.com/docs/integrations/gatsby

- [x] TypeScript
- [ ] Page transitions

  - https://www.gatsbyjs.org/docs/adding-page-transitions-with-plugin-transition-link/

- [ ] Fix incorrect button color on opening the website

  - https://curtistimson.co.uk/post/gatsbyjs/add-body-class-gatsbyjs-fouc/
