import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import logo from "../../assets/images/logo.png"
import { Link as Scroll } from "react-scroll"
import { Link as I18Link, useI18next } from "gatsby-plugin-react-i18next"
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
  const { language, changeLanguage } = useI18next()
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
        <I18Link to="/">
          <img src={logo} alt="arqprojekt" />
        </I18Link>
        <NavigationList menuOpen={menuOpen}>
          {/* <NavigationListItem onClick={handleDropdownOpen}>
            <StyledItemArrowWrapper>
              <p> Kopuły </p>
              <StyledArrow $dropdown={dropdown} />
            </StyledItemArrowWrapper>
            <DropdownUl $dropdown={dropdown} menuOpen={menuOpen}>
              <I18Link to="/kopuly/realizacje">
                <DropdownLi>Realizacje</DropdownLi>
              </I18Link>
              <I18Link to="/kopuly/projekty">
                <DropdownLi>Projekty</DropdownLi>
              </I18Link>
              <Link to="/kopuly/cennik">
                <DropdownLi>Cennik</DropdownLi>
              </Link>
            </DropdownUl>
          </NavigationListItem> */}
          <I18Link to="/kopuly/realizacje">
            <NavigationListItem>Realizacje</NavigationListItem>
          </I18Link>
          <I18Link to="/kopuly/wizualizacje">
            <NavigationListItem>Wizualizacje</NavigationListItem>
          </I18Link>
          <Link to="/produkty/swietlik">
            <NavigationListItem>Świetlik</NavigationListItem>
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
