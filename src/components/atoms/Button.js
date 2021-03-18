import React from "react"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.mainRed};
  background-color: white;
  font-size: 0.9rem;
  padding: 0.5em 1.7em;
  color: ${({ theme }) => theme.mainRed};
  margin-top: 1.5rem;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.mainRed};
    color: white;
  }
`

const Button = ({ children, onClickFn }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
