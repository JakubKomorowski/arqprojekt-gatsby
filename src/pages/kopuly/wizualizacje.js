import React from "react"
import MainTemplate from "../../templates/MainTemplate"
import { graphql } from "gatsby"
import PostCard from "../../components/molecules/PostCard"
import PageTitle from "../../components/atoms/PageTitle"
import SEO from "../../components/seo"

const Wizualizacje = ({ data }) => {
  return (
    <MainTemplate>
      <SEO title="Wizualizacje" />
      <PageTitle>Przykładowe wizualizacje</PageTitle>
      <ul>
        {data.allDatoCmsProjekt.nodes.map(
          ({ title, description, featuredImage, slug }) => {
            return (
              <li key={slug}>
                <PostCard
                  key={slug}
                  description={description}
                  title={title}
                  image={featuredImage.fluid}
                  slug={slug}
                  clickMe="zobacz więcej"
                />
              </li>
            )
          }
        )}
      </ul>
    </MainTemplate>
  )
}

// export const query = graphql`
//   query ProjektyQuery($language: String!) {
//     allDatoCmsProjekt(filter: { locale: { eq: $language } }) {
//       nodes {
//         title
//         description
//         slug
//         featuredImage {
//           fluid {
//             ...GatsbyDatoCmsFluid
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query ProjektyQuery {
    allDatoCmsProjekt {
      nodes {
        title
        description
        slug
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default Wizualizacje
