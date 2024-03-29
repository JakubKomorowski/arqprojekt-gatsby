import React from "react"
import logo from "../../assets/images/logoFooter.png"
import {
  Wrapper,
  TextWrapper,
  ContactInfo,
  ContentWrapper,
  CopieRight,
} from "../styledComponents/StyledFooter"

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <Wrapper name="footer">
      <ContentWrapper>
        <div>
          <img src={logo} alt="arqprojekt" />
        </div>

        <TextWrapper>
          <p>Tomasz Szarata</p>
          <p>Arq Projekt</p>
          <ContactInfo>
            <p>e-mail: biuro.arqprojekt@gmail.com</p>
            <p>telefon: (+48) 608 013 589</p>
          </ContactInfo>
        </TextWrapper>
      </ContentWrapper>
      <CopieRight>&copy; {year} Created by Jakub Komorowski</CopieRight>
    </Wrapper>
  )
}

export default Footer
