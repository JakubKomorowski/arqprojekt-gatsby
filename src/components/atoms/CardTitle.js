import React from "react"
import styled from "styled-components"

const ProjectTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.darkGray};
  font-weight: 400;
  font-size: 2rem;
  margin-top: 3rem;
`

const CardTitle = ({ children }) => {
  return <ProjectTitle>{children}</ProjectTitle>
}

export default CardTitle
