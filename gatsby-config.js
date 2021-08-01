module.exports = {
  siteMetadata: {
    title: `federated secure computing`,
  },
  plugins: [`gatsby-plugin-styled-components`,
            {
              resolve: `gatsby-plugin-intl`,
              options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `de`, `hi`],
                defaultLanguage: `en`,
                redirect: true,
                excludedPages: [`/src/docs`],
                ignoredPaths: [`/src/docs`]
              }
            },
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/docs`
              }
            },
            {
              resolve: `gatsby-transformer-remark`,
              options: {
                plugins: [
                  {
                    resolve: `gatsby-remark-classes`,
                    options: {
                      classMap: {
                        "inlineCode": "remark-inlineCode",
                        "code": "remark-code"
                      }
                    }
                  }
                ]
              }
            }
          ]
}
