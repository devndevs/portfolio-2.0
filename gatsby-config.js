module.exports = {
  siteMetadata: {
    description: "Deven Perkins is a San Diego(remote) based Full-Stack Web Developer",
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
