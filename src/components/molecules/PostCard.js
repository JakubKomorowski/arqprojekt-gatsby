import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "../atoms/Button"
import CardTitle from "../atoms/CardTitle"
import Img from "gatsby-image"
import CardDescription from "../atoms/CardDescription"

const Wrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  background-color: white;
  -webkit-box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 3px 1px 6px 0px rgba(0, 0, 0, 0.15);
  margin: 6rem auto;
  margin-top: 10px;
  border-radius: 5px 5px 20px 20px;
`

const GrayStripe = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  height: 5px;
  border-radius: 5px 5px 0 0;
`

const ContentWrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  align-items: center;
  margin-top: 3rem;
  padding-bottom: 6rem;
  grid-template-areas: "description mainImage";
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "mainImage"
      "description";
  }
`

const DescriptionButtonWrapper = styled.div`
  grid-area: description;
  width: 80%;
  @media (max-width: 800px) {
    margin-top: 2rem;
    width: 100%;
  }
`

const ImageWrapper = styled(Img)`
  grid-area: mainImage;
`

const PostCard = ({ title, description, slug, clickMe, image }) => {
  return (
    <Wrapper>
      <GrayStripe />
      <CardTitle>{title}</CardTitle>
      <ContentWrapper>
        <DescriptionButtonWrapper>
          <CardDescription>{description}</CardDescription>
          <Link to={slug}>
            <Button>{clickMe}</Button>
          </Link>
        </DescriptionButtonWrapper>
        <ImageWrapper fluid={image} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default PostCard
