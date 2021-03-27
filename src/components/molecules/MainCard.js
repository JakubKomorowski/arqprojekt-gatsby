import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.mainRed};
  border-radius: 20px;
  grid-area: ${({ grid }) =>
    grid === "a"
      ? "a"
      : grid === "b"
      ? "b"
      : grid === "c"
      ? "c"
      : grid === "d"
      ? "d"
      : grid === "e"
      ? "e"
      : grid === "f"
      ? "f"
      : "g"};
  padding: 2rem;
  padding-top: 1.5rem;
  line-height: 1.6;
  ${({ grid }) =>
    grid === "a" &&
    css`
      display: flex;
      position: relative;
      padding: 50px 50px 50px 0;
      @media (max-width: 800px) {
        padding: 2rem;
        padding-top: 1.5rem;
        display: block;
      }
    `}
`

const Title = styled.h2`
  margin-bottom: 0.8rem;
  margin-top: 0.5rem;
  font-size: 1.9rem;
`

const CardDesc = styled.p`
  font-size: 0.9rem;
`

const ContentWrapper = styled.div`
  ${({ grid }) =>
    grid === "a" &&
    css`
      width: 50%;
      @media (max-width: 800px) {
        width: 100%;
      }
    `}
`

const Icon = styled.div`
  width: 50%;
  img {
    width: 40px;
    ${({ grid }) =>
      grid === "a" &&
      css`
        width: 410px;
        position: absolute;
        left: 80px;
        top: -60px;
        @media (max-width: 1200px) {
          width: 300px;
          left: 30px;
          top: 20px;
        }
        @media (max-width: 800px) {
          display: none;
        }
      `}
  }
`

const IconSmall = styled.div`
  img {
    ${({ grid }) =>
      grid === "a" &&
      css`
        @media (min-width: 801px) {
          display: none;
        }
        @media (max-width: 800px) {
          width: 40px;
        }
      `}
  }
`

const MainCard = ({ title, description, image, image_small, grid }) => {
  return (
    <Wrapper grid={grid}>
      {grid === "a" ? (
        <>
          <IconSmall grid={grid}>
            <img src={image_small} alt="arqprojekt" />
          </IconSmall>

          <Icon grid={grid}>
            <img src={image} alt="arqprojekt" />
          </Icon>
        </>
      ) : (
        <Icon grid={grid}>
          <img src={image} alt="arqprojekt" />
        </Icon>
      )}

      <ContentWrapper grid={grid}>
        <Title>{title}</Title>
        <CardDesc>{description}</CardDesc>
      </ContentWrapper>
    </Wrapper>
  )
}

export default MainCard
