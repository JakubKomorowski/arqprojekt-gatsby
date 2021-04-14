import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import logo from "../../assets/images/logo.png"
import { Link as Scroll } from "react-scroll"
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

  const closeDropdown = () => {
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
              <StyledArrow $dropdown={dropdown} />
            </StyledItemArrowWrapper>
            <DropdownUl $dropdown={dropdown} menuOpen={menuOpen}>
              <Link to="/kopuly/realizacje">
                <DropdownLi>Realizacje</DropdownLi>
              </Link>
              <Link to="/kopuly/projekty">
                <DropdownLi>Projekty</DropdownLi>
              </Link>
              <Link to="/kopuly/cennik">
                <DropdownLi>Cennik</DropdownLi>
              </Link>
            </DropdownUl>
          </NavigationListItem>
          <Link to="/produkty">
            <NavigationListItem>Inne produkty</NavigationListItem>
          </Link>

          <a
            href="https://www.facebook.com/arq.domy.kopuly"
            target="_blank"
            rel="noreferrer"
          >
            <NavigationListItem>Aktualności</NavigationListItem>
          </a>
          <Scroll
            to="footer"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <NavigationListItem style={{ paddingRight: "0" }}>
              Kontakt
            </NavigationListItem>
          </Scroll>
        </NavigationList>
        <StyledBurger
          onClick={() => {
            handleMenuOpen()
            closeDropdown()
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

export default Nav
