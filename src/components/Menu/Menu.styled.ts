import styled from "styled-components";
import { COLORS } from "../../utils";

type StyledMenuProps = {
  width: any;
  height: any;
};

export const StyledMenu: any = styled.div<StyledMenuProps>`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type StyledLinkProps = {
  color: any;
};

export const StyledLink: any = styled.div<StyledLinkProps>`
  & > a {
    text-decoration: none;
    cursor: pointer;
    color: ${COLORS.xBlack};
    font-size: 20px;
    text-align: center;
    margin-left: 5px;
    margin-right: 50px;
  }
  & > a:hover {
    background-color: ${COLORS.xGray};
    color: ${COLORS.xWhite};
  }
`;
