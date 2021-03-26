import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import PageTitle from "../components/atoms/PageTitle"
import { SRLWrapper } from "simple-react-lightbox"

const Wrapper = styled.div`
  width: 1300px;
  max-width: 90%;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% auto;
  gap: 6rem;
  margin-bottom: 3rem;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`

const DescriptionWrapper = styled.div`
  line-height: 1.5;
`

const ImagesWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`

const StyledImgWrapper = styled(Img)`
  height: 210px;
  object-fit: cover;
`

const PostTemplate = ({ title, options, gallery, description }) => {
  return (
    <Wrapper>
      <PageTitle>{title}</PageTitle>
      <ContentWrapper>
        <DescriptionWrapper>{description}</DescriptionWrapper>
        <SRLWrapper options={options}>
          <ImagesWrapper>
            {gallery.map(({ url, fluid }) => {
              return (
                <div key={url}>
                  <a href={url}>
                    <StyledImgWrapper fluid={fluid} />
                  </a>
                </div>
              )
            })}
          </ImagesWrapper>
        </SRLWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default PostTemplate
