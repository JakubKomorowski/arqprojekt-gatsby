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
              <TagLine>{t("Dlaczego kopuła")}?</TagLine>
              <MainDesc>
                Dom w kształcie kopuły jest znany od początków budownictwa. Taka
                konstrukcja ma wiele zalet i jest chętnie stosowana w wielu
                krajach na całym świecie, również w Polsce zaczyna zyskiwać
                coraz większą popularność.
              </MainDesc>
              <Link to="/kopuly/realizacje">
                <Button red>Realizacje</Button>
              </Link>
              <Link to="/kopuly/wizualizacje">
                <Button red>Wizualizacje</Button>
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
