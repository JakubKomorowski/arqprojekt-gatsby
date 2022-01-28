import { graphql } from "gatsby"
import React from "react"
import PageTitle from "../../components/atoms/PageTitle"
import PostCard from "../../components/molecules/PostCard"
import SEO from "../../components/seo"
import MainTemplate from "../../templates/MainTemplate"

const Realizacje = ({ data }) => {
  return (
    <MainTemplate>
      <SEO title="Realizacje" />
      <PageTitle>Realizacje</PageTitle>
      <ul>
        {data.allDatoCmsRealizacja.nodes.map(
          ({ title, description, featuredImage, slug }) => {
            return (
              <li key={title}>
                <PostCard
                  key={title}
                  title={title}
                  slug={slug}
                  description={description}
                  image={featuredImage.fluid}
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
