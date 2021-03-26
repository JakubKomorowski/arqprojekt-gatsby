import React from "react"
import MainTemplate from "../../templates/MainTemplate"
import { graphql } from "gatsby"
import PostCard from "../../components/molecules/PostCard"
import PageTitle from "../../components/atoms/PageTitle"

const Projekty = ({ data }) => {
  return (
    <MainTemplate>
      <PageTitle>Projekty</PageTitle>
      {data.allDatoCmsProjekt.nodes.map(
        ({ title, description, featuredImage, slug }) => {
          return (
            <PostCard
              key={title}
              description={description}
              title={title}
              image={featuredImage.fluid}
              slug={slug}
              clickMe="zobacz więcej"
            />
          )
        }
      )}
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
