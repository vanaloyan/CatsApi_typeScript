import { StyledImg } from "./ImgCard.styled";
import { useDispatch } from "react-redux";
import { updateIsModal, updateOpenImgId } from "../../../store";
import React, { ReactElement } from "react";

type ImgCardProps = {
  imgUrl: string;
  imgId: string;
  index: number;
};

export const ImgCard: React.FC<ImgCardProps> = ({
  imgUrl,
  imgId,
  index,
}): ReactElement => {
  const dispatch = useDispatch();

  return (
    <StyledImg
      onClick={(): void => {
        dispatch(updateIsModal(true));
        dispatch(updateOpenImgId(index));
      }}
      className="images"
      id={imgId}
      src={imgUrl}
    />
  );
};
