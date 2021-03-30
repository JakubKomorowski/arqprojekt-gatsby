import styled from "styled-components"

export const Wrapper = styled.div`
  width: 1300px;
  max-width: 90%;
  margin: 0 auto;
`

export const MainSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
  max-height: 700px;
  min-height: 300px;
  margin-top: 60px;
  @media (max-width: 330px) {
    height: 80vh;
  }
`
export const ContentWrapper = styled.div`
  max-width: 500px;
  margin-right: 2rem;
  @media (max-width: 900px) {
    margin-right: 0rem;
  }
`

export const MainTitle = styled.h1`
  font-family: "Blinker";
  font-size: 4rem;
  color: ${({ theme }) => theme.darkGray};
  @media (max-width: 900px) {
    line-height: 1;
  }
`

export const TagLine = styled.p`
  font-family: "Blinker";
  font-size: 1.5rem;
`

export const MainDesc = styled.p`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 0.9rem;
`

export const ImageWrapper = styled.div`
  width: 40%;
  max-height: 90%;
  @media (max-width: 900px) {
    display: none;
  }
`
export const BlockSectionWrapper = styled.section`
  display: grid;
  margin-top: 4rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: auto; */
  grid-gap: 2rem;
  grid-template-areas:
    "a a a"
    "b c d"
    "e f g";

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "a a "
      "b c"
      "d e"
      "f g";
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "a"
      "b "
      "c "
      "d "
      "e "
      "f "
      "g ";
  }
`
