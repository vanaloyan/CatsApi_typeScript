export { updateCatsDataTest, creatCategoriesData } from "./store";

export {
  loadCatsData,
  selectCategoriesData,
  dataReducer,
  loadCategoriesData,
  selectCatsData,
} from "./features/dataSlice/dataSliceReducer";

export {
  linksReducer,
  selectIsModal,
  selectOpenImgId,
  updateIsModal,
  updateOpenImgId,
  selectPageId,
  selectUrl,
  updatePageId,
  updateUrl,
} from "./features/linksSlice/linksSliceReducer";
export { dataRequestFunction } from "../utils/dataRequestFunction";
