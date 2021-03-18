import React from "react"
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.darkGray};
  font-size: 3.5rem;
  text-align: center;
  margin: 4rem;
  margin-top: 6rem;
`

const PageTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default PageTitle
