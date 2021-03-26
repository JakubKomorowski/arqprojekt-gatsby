import styled from "styled-components"

export const GrayBar = styled.div`
  width: 100%;
  color: white;
  background-color: ${({ theme }) => theme.gray};
  font-size: 2rem;
  padding: 1rem;
  font-weight: 600;
`

export const Wrapper = styled.div`
  width: 1300px;
  max-width: 90%;
  margin: 0 auto;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Prices = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`

export const ImageWrapper = styled.div`
  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`
export const Description = styled.div`
  line-height: 1.5;
  @media (max-width: 1000px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`
export const AllTextWrapper = styled.div`
  width: 30%;
  min-width: 360px;
  margin-right: 20px;
  color: ${({ theme }) => theme.darkGray};
  @media (max-width: 1000px) {
    width: 90%;
    min-width: 200px;
  }
`
