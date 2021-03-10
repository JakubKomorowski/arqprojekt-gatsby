import { Link, graphql } from "gatsby"
import React from "react"
import { useState } from "react"
import logo from "../../assets/images/logo.png"
import {
  Wrapper,
  NavigationWrapper,
  NavigationList,
  NavigationListItem,
  DropdownUl,
  DropdownLi,
  StyledArrow,
  StyledItemArrowWrapper,
  StyledBurger,
} from "../styledComponents/StyledNav"

const Nav = () => {
  const [dropdown, setDropdown] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const handleDropdownOpen = () => {
    setDropdown(!dropdown)
  }

  const colseDropdown = () => {
    setDropdown(false)
  }
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Wrapper>
      <NavigationWrapper>
        <Link to="/">
          <img src={logo} alt="arqprojekt" />
        </Link>
        <NavigationList menuOpen={menuOpen}>
          <NavigationListItem onClick={handleDropdownOpen}>
            <StyledItemArrowWrapper>
              <p> Kopuły </p>
              <StyledArrow dropdown={dropdown} />
            </StyledItemArrowWrapper>
            <DropdownUl dropdown={dropdown} menuOpen={menuOpen}>
              <DropdownLi>
                <Link to="/kopuly/realizacje">Realizacje</Link>
              </DropdownLi>
              <DropdownLi>
                <Link to="/kopuly/projekty">Projekty</Link>
              </DropdownLi>
              <DropdownLi>
                <Link to="/kopuly/cennik">Cennik</Link>
              </DropdownLi>
            </DropdownUl>
          </NavigationListItem>

          <NavigationListItem>
            <Link to="/produkty">Inne produkty</Link>
          </NavigationListItem>

          <a href="https://www.facebook.com/arq.domy.kopuly" target="_blank">
            <NavigationListItem>Aktualności</NavigationListItem>
          </a>
          <NavigationListItem>Kontakt</NavigationListItem>
        </NavigationList>
        <StyledBurger
          onClick={() => {
            handleMenuOpen()
            colseDropdown()
          }}
          menuOpen={menuOpen}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </StyledBurger>
      </NavigationWrapper>
    </Wrapper>
  )
}

// export const query = graphql`
//   {
//     file(name: { eq: "logo" }) {
//       publicURL
//     }
//   }
// `

export default Nav
