import React from "react"
import Nav from "../components/nav/Nav"
import GlobalStyle from "../theme/GlobalStyle"
import styled from "styled-components"
import Footer from "../components/nav/Footer"

const Children = styled.div`
  min-height: calc(100vh - 60px - 180px);
`

const GlobalWrapper = styled.div`
  overflow-x: hidden;
  position: relative;
`

const MainTemplate = ({ children }) => {
  return (
    <GlobalWrapper>
      <GlobalStyle />
      <Nav />
      <Children>{children}</Children>
      <Footer />
    </GlobalWrapper>
  )
}

export default MainTemplate
