/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rotate calendar`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "./src/styles/variables.scss";`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Rotate calendar",
        short_name: "Rotate_calendar",
        start_url: "/",
        icon: "src/images/favicon.svg"
      },
    },
  ]
};