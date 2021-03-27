import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.mainRed};
  background-color: ${({ red, theme }) => (red ? theme.mainRed : "white")};
  font-size: ${({ red }) => (red ? "1.1rem" : "0.9rem")};
  padding: 0.5em 1.7em;
  color: ${({ red, theme }) => (red ? "white" : theme.mainRed)};
  margin-top: ${({ red }) => (red ? "2rem" : "1.5rem")};
  margin-right: ${({ red }) => (red ? "2rem" : "0")};
  transition: all 0.2s;
  border-radius: 25px;
  outline: none;

  &:hover {
    background-color: ${({ red, theme }) =>
      red ? theme.hooverRed : theme.mainRed};
    border: 2px solid
      ${({ red, theme }) => (red ? theme.hooverRed : theme.mainRed)};
    color: white;
  }
`

const Button = ({ children, red }) => {
  return <StyledButton red={red}>{children}</StyledButton>
}

export default Button
