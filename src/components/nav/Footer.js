import React from "react"
import logo from "../../assets/images/logoFooter.png"
import {
  Wrapper,
  TextWrapper,
  ContactInfo,
} from "../styledComponents/StyledFooter"

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="arqprojekt" />
      </div>
      <TextWrapper>
        <p>Arkadiusz Potakowski</p>
        <p>Arq Projekt</p>
        <ContactInfo>
          <p>e-mail: arek@arqprojekt.pl</p>
          <p>telefon: (+48) 510 203 874</p>
        </ContactInfo>
      </TextWrapper>
    </Wrapper>
  )
}

export default Footer
