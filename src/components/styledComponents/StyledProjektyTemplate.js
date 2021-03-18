import styled from "styled-components"
import Img from "gatsby-image"

export const StyledImgWrapper = styled(Img)`
  height: 210px;
  object-fit: cover;
`

export const ImagesWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`
export const Wrapper = styled.div`
  width: 1500px;
  max-width: 90%;
  margin: 0 auto;
`

export const DescriptionWrapper = styled.div`
  line-height: 1.5;
`

export const ContentWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% auto;
  gap: 6rem;
  margin-bottom: 3rem;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`
