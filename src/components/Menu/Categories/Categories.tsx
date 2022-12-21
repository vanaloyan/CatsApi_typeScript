import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type CategoriesProps = {
  name: string;
  requestAdd: (url: string) => void;
};

export const Categories: React.FC<CategoriesProps> = ({
  name,
}): ReactElement => {
  return <Link to={`/${name}?page=1`}>{name}</Link>;
};
