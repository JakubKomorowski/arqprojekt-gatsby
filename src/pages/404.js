import React from "react"
import SEO from "../components/seo"
import MainTemplate from "../templates/MainTemplate"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotFoundPage = () => (
  <>
    <MainTemplate>
      <SEO title="404: Not found" />
      <Wrapper>
        <div>
          <h1>Ups, coś poszło nie tak :|</h1>
          <p>404: Nie znaleziono takiej strony</p>
        </div>
      </Wrapper>
    </MainTemplate>
  </>
)

export default NotFoundPage
