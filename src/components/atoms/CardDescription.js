import React from "react"
import styled from "styled-components"

const StyledDescription = styled.p`
  line-height: 1.5;
  font-size: 0.9rem;
`

const CardDescription = ({ children }) => {
  return <StyledDescription>{children}</StyledDescription>
}

export default CardDescription
