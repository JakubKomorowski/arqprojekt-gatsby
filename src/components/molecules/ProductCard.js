import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.mainRed};
  height: 400px;
  background-color: white;
  -webkit-box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.15);
  a {
    text-decoration: none;
  }
  &:hover h2 {
    color: ${({ theme }) => theme.mainRed};
  }
  transition: all 0.3s;
  &:hover .img {
    transform: scale(1.05);
  }

  overflow: hidden;
`

const Title = styled.h2`
  text-decoration: none;
  color: ${({ theme }) => theme.darkGray};
`

const TitleWrapper = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImg = styled(Img)`
  object-fit: cover;
  height: 310px;
  border-radius: 20px 20px 0 0;
  transition: all 0.3s;
`

const ImageWrapper = styled.div`
  height: 310px;
  overflow: hidden;
`

const ProductCard = ({ title, image, slug }) => {
  return (
    <Wrapper>
      <Link to={slug}>
        <ImageWrapper>
          <StyledImg className="img" fluid={image} />
        </ImageWrapper>

        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Link>
    </Wrapper>
  )
}

export default ProductCard
