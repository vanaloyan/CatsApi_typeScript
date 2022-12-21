import styled from "styled-components";
import { COLORS } from "../../utils";

export const StyledPagination = styled.div`
  margin-bottom: 100px;
  display: flex;
`;

export const StyledBtn = styled.button`
  margin-right: 1px;
  margin-left: 1px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  border: 1px solid ${COLORS.xBlack};
  background-color: ${COLORS.xWhite};
  color: ${COLORS.xBlack};

  &:hover {
    background-color: ${COLORS.xGray};
  }
`;

export const StyledStepBtn = styled.button`
  margin-right: 1px;
  margin-left: 1px;
  height: 30px;
  width: 70px;
  border: 1px solid ${COLORS.xBlack};
  cursor: pointer;
};
  &:hover {
    background-color: ${COLORS.xGray};
    color: ${COLORS.xWhite};
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  border: none;
`;

export const StyledSpan = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 15px;
  color: black;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  margin-right: 1px;
  margin-left: 1px;
`;

export const StyledTest = styled.div`
  display: ${(props: any) => (props.aaa ? "flex" : "none")};
`;
