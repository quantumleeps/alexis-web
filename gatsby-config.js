module.exports = {
  pathPrefix: '/img',
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    }
  ],
};