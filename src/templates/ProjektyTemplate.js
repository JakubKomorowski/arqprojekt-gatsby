import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import MainTemplate from "./MainTemplate"

const StyledImgWrapper = styled(Img)`
  width: 300px;
`

const StyledBigImgWrapper = styled(Img)`
  width: 500px;
`

const ProjektyTemplate = ({ data }) => {
  const { title, description, featuredImage, gallery } = data.datoCmsProjekt
  const [bigImage, setBigImage] = useState({ ...gallery[0] })

  const openImage = filename => {
    const filteredGallery = gallery.find(el => el.filename === filename)
    setBigImage(filteredGallery)
    console.log(bigImage)
  }

  return (
    <MainTemplate>
      <h1>{title}</h1>
      <StyledImgWrapper fluid={featuredImage.fluid} />
      {gallery.map(el => {
        return (
          <>
            <div onClick={() => openImage(el.filename)}>
              <StyledImgWrapper fluid={el.fluid} />
            </div>
          </>
        )
      })}
      <StyledBigImgWrapper fluid={bigImage.fluid} />
      {console.log(bigImage)}
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
        filename
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
