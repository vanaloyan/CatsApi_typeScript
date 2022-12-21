import { Routes, Route } from "react-router-dom";
import { ImgList } from "../ImgList/ImgList";
import { useSelector } from "react-redux";
import { selectCategoriesData } from "../../store";
import React, { ReactElement } from "react";
import { CategoriesDataType } from "../../store/StoreTypes";

export const RoutesConfig = (): ReactElement => {
  const categoriesData = useSelector(selectCategoriesData);
  return (
    <Routes>
      {categoriesData.map((item: any): ReactElement => {
        return (
          <Route
            key={item.id}
            path={`/${item.name}:pageId`}
            element={<ImgList />}
          ></Route>
        );
      })}
      <Route path="/" element={<ImgList />} />
    </Routes>
  );
};
