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
      "Tempat berbagai artikel pemograman dan memberikan pengalaman belajar pemograman dari pemula hingga handal",
    siteUrl: "https://raksyedev.netlify.app",
    twitterUsername: "@usamahbass",
    siteImage:
      "https://avatars3.githubusercontent.com/u/56109283?s=460&u=f7a5ff506e10005704cc9e3ec490b5b936a8ace5&v=4",
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
        icon: `src/assets/avatar.svg`,
        icons: [
          {
            src: `/assets/avatar.svg`,
            sizes: `192x192`,
            type: `image/svg+xml`,
          },
          {
            src: `assets/avatar.svg`,
            sizes: `512x512`,
            type: `image/svg+xml`,
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
