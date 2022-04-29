const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const projektyTemplate = path.resolve(`./src/templates/ProjektyTemplate.js`)
  const realizacjeTemplate = path.resolve(
    `./src/templates/RealizacjeTemplate.js`
  )
  const produktyTemplate = path.resolve(`./src/templates/ProduktyTemplate.js`)

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
        allDatoCmsProdukt {
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
    const produkt = result.data.allDatoCmsProdukt.nodes

    // Create blog post pages.
    projekt.forEach(node => {
      createPage({
        path: `kopuly/projekt/${node.slug}`,
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

    produkt.forEach(node => {
      createPage({
        path: `produkty/${node.slug}`,
        component: produktyTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
