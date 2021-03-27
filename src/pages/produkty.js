import React from "react"
import MainTemplate from "../templates/MainTemplate"
import { graphql } from "gatsby"
import PageTitle from "../components/atoms/PageTitle"
import styled from "styled-components"
import ProductCard from "../components/molecules/ProductCard"

const Wrapper = styled.div`
  width: 1300px;
  max-width: 90%;
  margin: 0 auto;
`

const CardList = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`

const Produkty = ({ data }) => {
  return (
    <MainTemplate>
      <Wrapper>
        <PageTitle>Inne produkty</PageTitle>
        <CardList>
          {data.allDatoCmsProdukt.nodes.map(
            ({ title, featuredImage, slug }) => {
              return (
                <ProductCard
                  key={title}
                  title={title}
                  slug={slug}
                  image={featuredImage.fluid}
                />
              )
            }
          )}
        </CardList>
      </Wrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query ProduktyQuery {
    allDatoCmsProdukt {
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

export default Produkty
