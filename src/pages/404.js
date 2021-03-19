import React from "react"
import SEO from "../components/seo"
import MainTemplate from "../templates/MainTemplate"

const NotFoundPage = () => (
  <>
    <MainTemplate>
      <SEO title="404: Not found" />
      <h1>Ups, coś poszło nie tak :|</h1>
      <p>404: Nie znaleziono takiej strony</p>
    </MainTemplate>
  </>
)

export default NotFoundPage
