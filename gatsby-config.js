module.exports = {
  siteMetadata: {
    description: "Portfolio page of Deven Perkins",
    locale: "en",
    title: "Deven Perkins   ||   Portfolio",
    formspreeEndpoint: "https://formspree.io/f/xoqydrak",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        theme: "dark-blue",
      },
    },
  ],
}
