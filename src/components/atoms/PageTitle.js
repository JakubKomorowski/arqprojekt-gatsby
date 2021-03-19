import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.darkGray};
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 6rem;
  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`

const PageTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default PageTitle
