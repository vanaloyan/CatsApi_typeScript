import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination, Menu, RoutesConfig, Modal } from "./components";
import {
  selectCategoriesData,
  updateUrl,
  updateCatsDataTest,
  selectUrl,
  creatCategoriesData,
} from "./store";

import { StyledApp, StyledBorder } from "./App.styled";
import { LINKS, actualPathnameUrl, MAX_PAGES } from "./utils";

export const App = (): ReactElement => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const categoriesData = useSelector(selectCategoriesData);
  let [searchParams, setSearchParams] = useSearchParams();
  const url = useSelector(selectUrl);

  useEffect((): void => {
    dispatch(creatCategoriesData());
    requestAdd();
  }, []);

  useEffect((): void => {
    dispatch(updateUrl(actualPathnameUrl(categoriesData, pathname)));
    requestAdd(actualPathnameUrl(categoriesData, pathname));
  }, [pathname]);

  const requestAdd = (url: string = LINKS.randomUrl): void =>
    dispatch(updateCatsDataTest(url));

  useEffect((): void => {
    console.log(location, "location");
  }, [location]);

  return (
    <StyledApp>
      <Menu requestAdd={requestAdd} />
      <StyledBorder>
        <RoutesConfig />
      </StyledBorder>
      <Pagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        maxPageNumber={MAX_PAGES}
        actualUrl={url}
        requestAdd={requestAdd}
      />
      <Modal />
    </StyledApp>
  );
};
