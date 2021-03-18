import styled from "styled-components"

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.darkGray};
  height: 180px;
  img {
    width: 160px;
    margin-right: 50px;
  }
`
export const TextWrapper = styled.div`
  color: ${({ theme }) => theme.mainRed};
  font-weight: 500;
`
export const ContactInfo = styled.div`
  color: white;
  margin-top: 10px;
`
