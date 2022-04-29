import React from "react"
import { Link, graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {
  Wrapper,
  MainSectionWrapper,
  MainTitle,
  ContentWrapper,
  TagLine,
  MainDesc,
  ImageWrapper,
  BlockSectionWrapper,
} from "../components/styledComponents/StyledHomePage"
import MainTemplate from "../templates/MainTemplate"
import Button from "../components/atoms/Button"
import MainCard from "../components/molecules/MainCard"
import { homePageData } from "../data/HomePageData"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  return (
    <>
      <MainTemplate>
        <SEO title="Główna" />
        <Wrapper>
          <MainSectionWrapper>
            <ContentWrapper>
              <MainTitle>ARQ Projekt</MainTitle>
              {/* <TagLine>{t("Dlaczego kopuła")}?</TagLine> */}
              <MainDesc>
                Jesteśmy firmą budowlaną specjalizującą się w budowie kopuł w
                konstrukcji drewnianej. Wykonujemy wszystkie etapy budowy od
                fundamentu do stanu deweloperskiego. Budujemy i projektujemy
                kopuły na zgłoszenie do 35 m2 oraz wykonujemy większe obiekty na
                podstawie projektu budowlanego. Oferujemy również świetliki
                dachowe zwieńczające kopułę.
              </MainDesc>
              <Link to="/kopuly/realizacje">
                <Button red>Realizacje</Button>
              </Link>
              <Link to="/kopuly/projekt">
                <Button red>Projekt</Button>
              </Link>
            </ContentWrapper>
            <ImageWrapper>
              <Img fluid={data.file.childImageSharp.fluid} />
            </ImageWrapper>
          </MainSectionWrapper>
          <BlockSectionWrapper>
            {homePageData.map(
              ({ grid, image, title, description, image_small }) => {
                return (
                  <MainCard
                    grid={grid}
                    image={image}
                    image_small={image_small}
                    title={title}
                    description={description}
                  />
                )
              }
            )}
          </BlockSectionWrapper>
        </Wrapper>
      </MainTemplate>
    </>
  )
}

export const query = graphql`
  query MainDome($language: String!) {
    file(name: { eq: "mainDome" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default IndexPage
