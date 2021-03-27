import React from "react"
import PageTitle from "../../components/atoms/PageTitle"
import MainTemplate from "../../templates/MainTemplate"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Wrapper,
  GrayBar,
  ContentWrapper,
  Prices,
  ImageWrapper,
  Description,
  AllTextWrapper,
} from "../../components/styledComponents/StyledCennik"
import SEO from "../../components/seo"

const Cennik = ({ data }) => {
  return (
    <MainTemplate>
      <SEO title="Cennik" />
      <Wrapper>
        <PageTitle>Przykładowa wycena</PageTitle>
        <GrayBar>Kopuła ARQ-35</GrayBar>
        <ContentWrapper>
          <AllTextWrapper>
            <Prices>
              <div>
                <p>Fundament: </p>
                <p>Konstrukcja nośna:</p>
                <p>Poszycie wewnętrzne:</p>
                <p>Poszycie gont bitumiczny:</p>
                <p>Izolacja cieplna:</p>
                <p>Świetlik:</p>
              </div>
              <div>
                <p>10 000 zł</p>
                <p>49 000 zł</p>
                <p>10 800 zł</p>
                <p>16 000 zł</p>
                <p>10 600 zł</p>
                <p>6 200 zł</p>
              </div>
            </Prices>
            <Description>
              Witrynę tarasową, okna, drzwi zewnętrzne i wewnętrzne, schody
              klient wybiera z oferty rynkowej wedle własnego upodobania
              (służymy wsparciem). Istnieje możliwość zmiany gontu bitumicznego
              na drewniany (np. osikowy, modrzewiowy) oraz wyboru innego systemu
              ocieplenia. Cenę ustalamy indywidualnie z klientem.
            </Description>
          </AllTextWrapper>
          <ImageWrapper>
            <Img fluid={data.file.childImageSharp.fluid} />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query Cennik {
    file(name: { eq: "cennik" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Cennik
