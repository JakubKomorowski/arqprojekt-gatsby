import styled from "styled-components"
import { FaAngleDown } from "react-icons/fa"

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
  }
`

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1500px;
  max-width: 90%;
  margin: 0 auto;
  height: 100%;
  img {
    width: 80px;
    margin-top: 5px;
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`
export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  a {
    text-decoration: none;
    color: #747474;
    :hover {
      color: #e6363c;
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    transition: all ease-in-out 0.3s;
    right: ${props => (props.menuOpen ? "0px" : "-500px")};
    flex-direction: column;
    height: 90vh;
    justify-content: space-around;
    min-width: 200px;
    width: 50vw;
    background-color: white;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`

export const NavigationListItem = styled.li`
  margin-left: 40px;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #747474;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  :hover {
    color: #e6363c;
  }
  @media (max-width: 768px) {
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const DropdownUl = styled.ul`
  list-style: none;
  height: ${props => (props.dropdown ? "200px" : "0px")};
  position: relative;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  top: 15px;
  border-left: ${props => (props.dropdown ? "2px solid #e6363c" : "none")};
  text-align: left;
  @media (min-width: 768px) {
    position: absolute;
    top: 55px;
    background-color: white;
    left: -20px;
    border-top: ${props => (props.dropdown ? "2px solid #e6363c" : "none")};
    width: 150px;
    border-left: none;
    height: ${props => (props.dropdown ? "180px" : "0px")};
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  }
`

export const DropdownLi = styled.li`
  padding: 20px;
  :hover {
    color: #e6363c;
  }
  @media (max-width: 768px) {
    padding: 25px;
  }
`

export const StyledArrow = styled(FaAngleDown)`
  transition: 0.2s;
  transform: ${props => (props.dropdown ? "rotate(180deg)" : "rotate(0deg)")};
  margin-top: 2px;
`
export const StyledItemArrowWrapper = styled.div`
  display: flex;
`
export const StyledBurger = styled.div`
  z-index: 11;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .line1,
  .line2,
  .line3 {
    width: 25px;
    height: 3px;
    background: #24252a;
    margin: 5px;
  }
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  .line1 {
    transition: transform 0.3s;
    transform: ${props =>
      props.menuOpen ? "rotate(-45deg) translate(-5px,6px)" : "rotate(0deg)"};
  }

  .line2 {
    opacity: ${props => (props.menuOpen ? "0" : "1")};
  }

  .line3 {
    transition: transform 0.3s;
    transform: ${props =>
      props.menuOpen ? "rotate(45deg) translate(-5px,-6px)" : "rotate(0deg)"};
  }
`
