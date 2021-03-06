require("dotenv").config({
  path: `.env${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "RaksyeDev",
    author: "@usamahbass",
    name: "Usamah Basalamah",
    description:
      "RaksyeDev: Tempat berbagai artikel tutorial mengenai koding , pemograman dan teknologi",
    descSite:
      "Tempat berbagai artikel mengenai koding,pemograman dan teknologi",
    siteUrl: "https://raksyedev.netlify.app",
    twitterUsername: "@usamahbass",
    siteImage: "/static/raksyedev.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `RaksyeDev`,
        short_name: `RaksyeDev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1d72aa`,
        display: `standalone`,
        icon: `src/assets/raksyedev.png`,
        icons: [
          {
            src: `/assets/raksyedev.png`,
            sizes: `192x192`,
            type: `image/svg+xml`,
          },
          {
            src: `assets/raksyedev.png`,
            sizes: `512x512`,
            type: `image/svg+xml`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
