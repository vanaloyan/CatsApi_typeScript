import styled from "styled-components";

export const StyledImgFixBorder = styled.figure``;

type StyledImgCardsProps = {
  width: any;
};
export const StyledImgCards: any = styled.div<StyledImgCardsProps>`
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  width: 150vh;
  grid-template-columns: repeat(5, 160px);
  grid-template-rows: repeat(2, 160px);
`;
