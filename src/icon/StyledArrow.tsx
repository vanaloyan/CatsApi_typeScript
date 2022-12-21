import React, { ReactElement } from "react";
import styled from "styled-components";
import { COLORS } from "../utils";

const StyledArrow: any = styled.svg`
  fill: ${COLORS.xBlack};

  &:hover {
    fill: ${COLORS.xGray};
  }
`;

type SvgArrowProps = {
  direction: string;
};

export const SvgArrow: React.FC<SvgArrowProps> = ({
  direction,
}): ReactElement => {
  let angle: number = 0;

  switch (direction) {
    case "left":
      angle = 0;
      break;
    case "right":
      angle = 180;
      break;
    default:
      angle = 0;
  }

  return (
    <StyledArrow
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100vh"
      viewBox="0 0 10.605 15.555"
      transform={`rotate(${angle})`}
    >
      <polygon
        points="
                    10.605 12.727
                    5.656 7.776
                    10.605 2.828
                    7.777 0 0 7.776
                    7.777 15.555
                    10.605 12.727
                "
      />
    </StyledArrow>
  );
};
