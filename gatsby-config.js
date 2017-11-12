module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
  
  
  ],
  
}
