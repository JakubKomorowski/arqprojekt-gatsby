const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projektyTemplate = path.resolve(`./src/templates/ProjektyTemplate.js`)
  const realizacjeTemplate = path.resolve(
    `./src/templates/RealizacjeTemplate.js`
  )

  return graphql(
    `
      query MapModele {
        allDatoCmsProjekt {
          nodes {
            slug
          }
        }
        allDatoCmsRealizacja {
          nodes {
            slug
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const projekt = result.data.allDatoCmsProjekt.nodes
    const realizacja = result.data.allDatoCmsRealizacja.nodes

    // Create blog post pages.
    projekt.forEach(node => {
      createPage({
        path: `kopuly/projekty/${node.slug}`,
        component: projektyTemplate,
        context: {
          slug: node.slug,
        },
      })
    })

    realizacja.forEach(node => {
      createPage({
        path: `kopuly/realizacje/${node.slug}`,
        component: realizacjeTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
