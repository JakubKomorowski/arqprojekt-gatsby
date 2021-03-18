import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  StyledImgWrapper,
  ImagesWrapper,
  Wrapper,
  DescriptionWrapper,
  ContentWrapper,
} from "../components/styledComponents/StyledProjektyTemplate"
import MainTemplate from "./MainTemplate"
import "@reach/dialog/styles.css"
import { SRLWrapper } from "simple-react-lightbox"
import PageTitle from "../components/atoms/PageTitle"

const options = {
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
    showThumbnailsButton: false,
  },
}

const ProjektyTemplate = ({ data }) => {
  const { title, description, featuredImage, gallery } = data.datoCmsProjekt
  // const [bigImage, setBigImage] = useState({ ...gallery[0] })

  // const openImage = url => {
  //   const filteredGallery = gallery.find(el => el.url === url)
  //   setBigImage(filteredGallery)
  //   console.log(filteredGallery)
  // }

  return (
    <MainTemplate>
      <Wrapper>
        <PageTitle>{title}</PageTitle>
        {/* <StyledImgWrapper fluid={featuredImage.fluid} /> */}
        <ContentWrapper>
          <DescriptionWrapper>
            <p>{description}</p>
          </DescriptionWrapper>
          <SRLWrapper options={options}>
            <ImagesWrapper>
              {gallery.map(el => {
                return (
                  <div key={el.url}>
                    <a href={el.url}>
                      <StyledImgWrapper fluid={el.fluid} />
                    </a>
                  </div>
                )
              })}
            </ImagesWrapper>
          </SRLWrapper>
        </ContentWrapper>
      </Wrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query singleProjektQuery($slug: String!) {
    datoCmsProjekt(slug: { eq: $slug }) {
      title
      slug
      description
      gallery {
        url
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default ProjektyTemplate
