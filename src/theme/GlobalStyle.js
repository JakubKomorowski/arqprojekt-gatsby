import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

body{
    font-family: 'Montserrat', sans-serif;
    background-color: #FBFBFB;
}

button{
    font-family: 'Montserrat', sans-serif;
    cursor: pointer; 
}
`
export default GlobalStyle
