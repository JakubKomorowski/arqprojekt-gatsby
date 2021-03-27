import React from "react"
import MainTemplate from "../../templates/MainTemplate"
import { graphql } from "gatsby"
import PostCard from "../../components/molecules/PostCard"
import PageTitle from "../../components/atoms/PageTitle"
import SEO from "../../components/seo"

const Projekty = ({ data }) => {
  return (
    <MainTemplate>
      <SEO title="Projekty" />
      <PageTitle>Projekty</PageTitle>
      <ul>
        {data.allDatoCmsProjekt.nodes.map(
          ({ title, description, featuredImage, slug }) => {
            return (
              <li>
                <PostCard
                  key={title}
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

export default Projekty
