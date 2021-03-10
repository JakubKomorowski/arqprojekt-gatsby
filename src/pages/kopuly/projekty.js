import React from "react"
import MainTemplate from "../../templates/MainTemplate"
import { graphql } from "gatsby"
import PostCard from "../../components/PostCard"

const Projekty = ({ data }) => {
  return (
    <MainTemplate>
      {data.allDatoCmsProjekt.nodes.map(el => {
        return (
          <PostCard
            key={el.title}
            description={el.description}
            title={el.title}
            image={el.featuredImage.fluid}
            slug={el.slug}
          />
        )
      })}
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
