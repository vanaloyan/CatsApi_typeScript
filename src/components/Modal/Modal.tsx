import {
  updateIsModal,
  selectIsModal,
  selectOpenImgId,
  updateOpenImgId,
  selectCatsData,
} from "../../store";

import { useDispatch, useSelector } from "react-redux";
import { StyledBtn } from "../../App.styled";
import { SvgArrow } from "../../icon/StyledArrow";

import { StyledImg, StyledModal, StyledModalContent } from "./Modal.styled";
import React, { ReactElement } from "react";

export const Modal = (): React.ReactElement | null => {
  const isOpen = useSelector(selectIsModal);
  const dispatch = useDispatch();
  const catData = useSelector(selectCatsData);
  const openImgId = useSelector(selectOpenImgId);

  if (!catData.length) {
    return null;
  }
  return (
    <StyledModal isOpen={isOpen} onClick={() => dispatch(updateIsModal(false))}>
      <StyledBtn
        onClick={(e: React.SyntheticEvent) => {
          e.stopPropagation();
          dispatch(updateOpenImgId(openImgId - 1));
        }}
      >
        <SvgArrow direction={"left"} />
      </StyledBtn>

      <StyledModalContent
        isOpen={isOpen}
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
      >
        <StyledImg src={catData[openImgId].url} alt="img" />
      </StyledModalContent>

      <StyledBtn
        onClick={(e: React.SyntheticEvent) => {
          e.stopPropagation();
          dispatch(updateOpenImgId(openImgId + 1));
        }}
      >
        <SvgArrow direction={"right"} />
      </StyledBtn>
    </StyledModal>
  );
};
