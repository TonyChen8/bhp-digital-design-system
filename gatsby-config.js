module.exports = {
  siteMetadata: {
    title: `BHP Design Pattern Library`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'components',
        path: '${__dirname}/src/components/',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ui-components`,
        path: `${__dirname}/src/pages/ui-components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `foundations`,
        path: `${__dirname}/src/pages/foundations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `patterns`,
        path: `${__dirname}/src/pages/patterns`,
      },
    },
  
  
  ],
  
}
