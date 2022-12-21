import thunk from "redux-thunk";
import {
  initialLinks,
  linksReducer,
} from "./features/linksSlice/linksSliceReducer";
import {
  initialData,
  dataReducer,
} from "./features/dataSlice/dataSliceReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { loadCategoriesData, loadCatsData, dataRequestFunction } from "./index";
import { LINKS, CATEGORIES } from "../utils";

const store = createStore(
  combineReducers({
    links: linksReducer,
    data: dataReducer,
  }),
  {
    links: initialLinks,
    data: initialData,
  },
  applyMiddleware(thunk)
);
export default store;

export const updateCatsDataTest = (url: string): any => {
  return (dispatch: any, getState: any) => {
    return dataRequestFunction(url).then((loadedData: any): any => {
      if (loadedData?.data) {
        dispatch(loadCatsData(loadedData.data));
      }
    });
  };
};

export const creatCategoriesData = (): any => {
  return (dispatch: any, getState: any) => {
    return dataRequestFunction(LINKS.categoriesUrl).then(
      (loadedData: any): any => {
        loadedData.data.push(CATEGORIES);
        const newData = loadedData.data.map((obj: any) => ({
          ...obj,
          url: `${LINKS.URL}${obj.id}`,
          pageId: "1",
        }));
        dispatch(loadCategoriesData(newData));
      }
    );
  };
};
