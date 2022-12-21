import {
  _baseApiType,
  CATEGORIESTypes,
  COLORSTypes,
  LINKSTypes,
  MAX_PAGESType,
} from "./UtilsTypes";

export const _baseApi: _baseApiType = "https://api.thecatapi.com/v1/";
export const MAX_PAGES: MAX_PAGESType = 100;

export const LINKS: LINKSTypes = {
  URL: "https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=",
  categoriesUrl: `${_baseApi}categories`,
  randomUrl: `${_baseApi}images/search?limit=10`,
};

export const CATEGORIES: CATEGORIESTypes = {
  id: 9,
  name: "",
  url: `${LINKS.randomUrl}`,
};

export const COLORS: COLORSTypes = {
  xWhite: "#EDEDED",
  xBlack: "#171717",
  xGray: "#444444",
  xRed: "#DA0037",
};
