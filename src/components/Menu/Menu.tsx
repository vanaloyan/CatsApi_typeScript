import { Categories } from "./Categories/Categories";
import { useSelector } from "react-redux";
import { StyledLink, StyledMenu } from "./Menu.styled";
import { selectCategoriesData } from "../../store";
import React, { ReactElement } from "react";
import { CategoriesDataType } from "../../store/StoreTypes";

type MenuProps = {
  requestAdd: (url: string) => void;
};

export const Menu: React.FC<MenuProps> = ({ requestAdd }): ReactElement => {
  const categoriesData: CategoriesDataType = useSelector(selectCategoriesData);
  return (
    <StyledMenu>
      {categoriesData.map((item: any): any => {
        if (item.name.length) {
          return (
            <StyledLink key={item.id}>
              <Categories name={item.name} requestAdd={requestAdd} />
            </StyledLink>
          );
        }
      })}
    </StyledMenu>
  );
};
