module.exports = {
  siteMetadata: {
    title: `My Musical Picture`,
    description: `Web application that generates a picture based on your Spotify listening history`,
    author: `@naymello`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Musiacal Picture`,
        short_name: `MyMusicalPicture`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#EEFF00`,
        display: `minimal-ui`,
        icon: `src/assets/icon.svg`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Poppins',
            weights: [300, 400, 500, 700]
          }
        ]
      }
    }
  ],
}
