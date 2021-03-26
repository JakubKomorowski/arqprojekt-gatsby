import styled from "styled-components"

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.darkGray};
  flex-direction: column;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  img {
    width: 130px;
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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const CopieRight = styled.p`
  color: lightgray;
  margin-bottom: 7px;
  font-size: 0.7rem;
`
