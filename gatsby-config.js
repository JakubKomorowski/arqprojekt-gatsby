require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `ARQ Projekt`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starteDom w kształcie kopuły jest znany od początków budownictwa. Taka konstrukcja ma wiele zalet i jest chętnie stosowana w wielu krajach na całym świecie, również w Polsce zaczyna zyskiwać coraz większą popularność.r ships with the main Gatsby configuration files you might need.`,
    author: `Jakub Komorowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ARQ Projekt`,
        short_name: `ARQ Projekt`,
        start_url: `/`,
        background_color: `#FBFBFB`,
        theme_color: `#e6363c`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Montserrat\:300,400,400i,500,600,700`, // you can also specify font weights and styles
          `Blinker\:400,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS,
      },
    },
  ],
}
