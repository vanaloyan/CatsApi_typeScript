import {
  CategoriesDataType,
  CatsDataType,
  InitialDataTypes,
  StateTypes,
} from "../../StoreTypes";

export const dataReducer = (state: object = {}, action: any): any => {
  switch (action.type) {
    case "UPDATE_CATS_DATA":
      return {
        ...state,
        catsData: action.catsData,
      };
    case "UPDATE_CATEGORIES_DATA":
      return {
        ...state,
        categoriesData: action.categoriesData,
      };
    default:
      return state;
  }
};
export const initialData: InitialDataTypes = {
  catsData: [],
  categoriesData: [],
};
export const selectCatsData = (state: StateTypes): CatsDataType =>
  state.data.catsData;
export const selectCategoriesData = (state: StateTypes): any =>
  state.data.categoriesData;

export const loadCatsData = (
  data: CatsDataType
): {
  type: string;
  catsData: CatsDataType;
} => ({
  type: "UPDATE_CATS_DATA",
  catsData: data,
});
export const loadCategoriesData = (data: any) => ({
  type: "UPDATE_CATEGORIES_DATA",
  categoriesData: data,
});
