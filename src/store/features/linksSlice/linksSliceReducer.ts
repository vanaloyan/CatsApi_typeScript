import { LINKS } from "../../../utils";
import { InitialLinksTypes, StateTypes } from "../../StoreTypes";

export const linksReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case "UPDATE_URL":
      return {
        ...state,
        url: action.url,
      };
    case "UPDATE_PAGE_ID":
      return {
        ...state,
        pageId: action.pageId,
      };
    case "UPDATE_IS_MODAL":
      return {
        ...state,
        isModal: action.isModal,
      };
    case "UPDATE-OPEN_IMG_ID":
      return {
        ...state,
        openImgId: action.openImgId,
      };

    default:
      return state;
  }
};

export const initialLinks: InitialLinksTypes = {
  url: LINKS.randomUrl,
  pageId: 1,
  isModal: false,
  openImgId: 0,
};

export const selectUrl = (state: StateTypes): string => state.links.url;
export const selectPageId = (state: StateTypes): number => state.links.pageId;
export const selectIsModal = (state: StateTypes): boolean =>
  state.links.isModal;
export const selectOpenImgId = (state: StateTypes): number =>
  state.links.openImgId;

export const updateOpenImgId = (
  action: number
): {
  type: string;
  openImgId: number;
} => {
  if (action < 0) {
    return {
      type: "UPDATE-OPEN_IMG_ID",
      openImgId: 9,
    };
  } else if (action > 9) {
    return {
      type: "UPDATE-OPEN_IMG_ID",
      openImgId: 0,
    };
  }
  return {
    type: "UPDATE-OPEN_IMG_ID",
    openImgId: action,
  };
};

export const updateIsModal = (
  action: boolean
): {
  type: string;
  isModal: boolean;
} => ({
  type: "UPDATE_IS_MODAL",
  isModal: action,
});

export const updateUrl = (
  newUrl: string | undefined
): {
  type: string;
  url: string | undefined;
} => ({
  type: "UPDATE_URL",
  url: newUrl,
});
export const updatePageId = (
  newPageId: number
): {
  type: string;
  pageId: number;
} => ({
  type: "UPDATE_PAGE_ID",
  pageId: newPageId,
});
