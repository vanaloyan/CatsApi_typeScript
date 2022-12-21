import { ImgCard } from "./ImgCard/ImgCard";
import { StyledImgCards, StyledImgFixBorder } from "./ImgList.styled";
import { useSelector } from "react-redux";
import { selectCatsData } from "../../store";
import React, { ReactElement } from "react";
import { CatsDataItemType, CatsDataType } from "../../store/StoreTypes";

export const ImgList = (): ReactElement => {
  const data: CatsDataType = useSelector(selectCatsData);

  return (
    <StyledImgCards>
      {data?.map((item: CatsDataItemType, index: number): ReactElement => {
        return (
          <StyledImgFixBorder key={item.id}>
            <ImgCard imgUrl={item.url} imgId={item.id} index={index} />
          </StyledImgFixBorder>
        );
      })}
    </StyledImgCards>
  );
};
