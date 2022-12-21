export type FirstCategoriesDataItemType = {
  id: number;
  name: string;
};
export type FirstCategoriesDataType = FirstCategoriesDataItemType[];

export type CategoriesDataItemType = {
  id: number;
  name: string;
  url: string;
  pageId: number;
};
export type CategoriesDataType =
  | CategoriesDataItemType[]
  | FirstCategoriesDataItemType[];

export type CatsDataItemType = {
  id: string;
  url: string;
  width: number;
  height: number;
};
export type CatsDataType = CatsDataItemType[];

export type InitialLinksTypes = {
  url: string;
  pageId: number;
  isModal: boolean;
  openImgId: number;
};

export type InitialDataTypes = {
  catsData: CatsDataType;
  categoriesData: CategoriesDataItemType[] | FirstCategoriesDataType;
};

export type StateTypes = {
  links: InitialLinksTypes;
  data: InitialDataTypes;
};
