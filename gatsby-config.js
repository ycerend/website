module.exports = {
  siteMetadata: {
    title: `federated secure computing`,
  },
  plugins: [`gatsby-plugin-styled-components`,
            {
              resolve: `gatsby-plugin-intl`,
              options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `de`],
                defaultLanguage: `en`,
                redirect: true,
                excludedPages: []
              }
            }
          ]
}
