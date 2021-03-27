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

const CardList = styled.ul`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  list-style: none;
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
                <li>
                  <ProductCard
                    key={title}
                    title={title}
                    slug={slug}
                    image={featuredImage.fluid}
                  />
                </li>
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
