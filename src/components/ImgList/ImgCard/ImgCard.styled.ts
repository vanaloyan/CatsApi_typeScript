import styled from "styled-components";
import { COLORS } from "../../../utils";

type StyledImgProps = {
  width: any;
  height: any;
  padding: any;
  filter: any;
  cursor: any;
};

export const StyledImg: any = styled.img<StyledImgProps>`
  width: 150px;
  height: 150px;
  filter: grayscale(100%);
  padding: 0;
  background-color: ${COLORS.xGray};
  cursor: zoom-in;

  &:hover {
    position: relative;
    filter: none;
  }
`;
