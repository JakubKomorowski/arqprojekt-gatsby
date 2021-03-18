import React from "react"
import Nav from "../components/nav/Nav"
import GlobalStyle from "../theme/GlobalStyle"
import styled, { ThemeProvider } from "styled-components"
import Footer from "../components/nav/Footer"
import SimpleReactLightbox from "simple-react-lightbox"
import { theme } from "../theme/theme"
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
      <SimpleReactLightbox>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Nav />
          <Children>{children}</Children>
          <Footer />
        </ThemeProvider>
      </SimpleReactLightbox>
    </GlobalWrapper>
  )
}

export default MainTemplate
