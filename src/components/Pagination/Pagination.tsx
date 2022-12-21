import {
  StyledBtn,
  StyledDiv,
  StyledPagination,
  StyledSpan,
  StyledStepBtn,
} from "./Pagination.styled";
import { MAX_PAGES, COLORS } from "../../utils";
import { useSelector } from "react-redux";
import { selectUrl } from "../../store";
import React, { ReactElement } from "react";

type PaginationProps = {
  searchParams: any;
  setSearchParams: any;
  requestAdd: (url?: string) => void;
  maxPageNumber: number;
  actualUrl: string;
};

export const Pagination: React.FC<PaginationProps> = ({
  searchParams,
  setSearchParams,
  requestAdd,
}): ReactElement => {
  const currentPage = Number(searchParams.get("page"));
  const actualUrl = useSelector(selectUrl);
  const MAX = MAX_PAGES;

  const createPaginationBtn = new Array(MAX)
    .fill(0)
    .map((item: number, index: number): any => (
      <StyledBtn
        style={
          currentPage === index + 1
            ? { backgroundColor: COLORS.xGray, color: COLORS.xWhite }
            : { backgroundColor: COLORS.xWhite, color: COLORS.xGray }
        }
        key={index}
        onClick={() => {
          handleClick(index + 1);
        }}
      >
        {index + 1}
      </StyledBtn>
    ));

  const changeCurrentPage = (action: string): void => {
    let step: number = 0;
    currentPage > 1 && action === "previous"
      ? (step = -1)
      : currentPage < MAX && action === "next"
      ? (step = 1)
      : "";
    setSearchParams({ page: (currentPage + step).toString() });
    step !== 0 ? requestAdd(actualUrl) : "";
  };

  const handleClick = (idx: number): void => {
    setSearchParams({ page: idx.toString() });
    requestAdd(actualUrl);
  };

  const firstPages = (): number[] => {
    let endPage = 6;
    currentPage < 11 ? (endPage = 10) : (endPage = 6);
    return createPaginationBtn.slice(0, endPage);
  };

  const secondPages = (): number[] => {
    let startPage: number = MAX - 5;
    let endPage: number = currentPage + 3;
    if (currentPage < MAX - 3) {
      startPage = currentPage - 2;
      endPage = currentPage + 1;
    }
    return createPaginationBtn.slice(startPage, endPage);
  };

  const endPages = (): number[] => {
    return createPaginationBtn.slice(MAX - 1, MAX);
  };

  const styleAAA = (): { display: string } => {
    if (currentPage > 10) {
      return {
        display: "flex",
      };
    } else {
      return {
        display: "none",
      };
    }
  };

  const styleBBB = (): { display: string } => {
    if (currentPage > MAX - 4) {
      return {
        display: "none",
      };
    } else {
      return {
        display: "flex",
      };
    }
  };

  return (
    <StyledPagination>
      <StyledStepBtn
        onClick={() => {
          changeCurrentPage("previous");
        }}
      >
        previous
      </StyledStepBtn>
      <StyledDiv>{firstPages()}</StyledDiv>
      <StyledSpan style={styleAAA()}>...</StyledSpan>
      <StyledDiv style={styleAAA()}>{secondPages()}</StyledDiv>
      <StyledSpan style={styleBBB()}>...</StyledSpan>
      <StyledDiv style={styleBBB()}>{endPages()}</StyledDiv>
      <StyledStepBtn
        onClick={() => {
          changeCurrentPage("next");
        }}
      >
        next
      </StyledStepBtn>
    </StyledPagination>
  );
};
