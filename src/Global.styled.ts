import { createGlobalStyle } from "styled-components";
import { COLORS } from "./utils";

export const StyledGlobal = createGlobalStyle`
  body{
    background-color: ${COLORS.xWhite};
  }
  
  *{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans Extrabold', sans-serif;
    font-size: 15px;
    
  }
`;
