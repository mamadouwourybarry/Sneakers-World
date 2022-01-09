module.exports = {
  siteMetadata: {
    title: "Sneakers World",
    description: "Sneakers World was founded in 1977 by a legende MJ.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        
        url: "http://sneakersworld.local/graphql",
      },
    },
  ],
};