import { graphql } from "gatsby"
import React from "react"
import PostCard from "../../components/PostCard"
import MainTemplate from "../../templates/MainTemplate"

const Realizacje = ({ data }) => {
  return (
    <MainTemplate>
      <div>realizacje</div>
      {data.allDatoCmsRealizacja.nodes.map(el => {
        return (
          <PostCard
            title={el.title}
            slug={el.slug}
            desription={el.desription}
            image={el.featuredImage.fluid}
          />
        )
      })}
    </MainTemplate>
  )
}

export const query = graphql`
  query RealizacjeQuery {
    allDatoCmsRealizacja {
      nodes {
        title
        slug
        description
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default Realizacje
