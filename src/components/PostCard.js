import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Wrapper = styled.section`
  width: 500px;
  height: 300px;
  background-color: gray;
  margin-top: 10px;
`

const ImageWrapper = styled(Img)`
  width: 300px;
`

const PostCard = ({ image, title, description, slug }) => {
  return (
    <Wrapper>
      post card here
      <div>{title}</div>
      <div>{description}</div>
      {/* <div>{where}</div> */}
      <ImageWrapper fluid={image} />
      <Link to={slug}>
        {" "}
        <button>zobacz wiecej</button>
      </Link>
    </Wrapper>
  )
}

export default PostCard
