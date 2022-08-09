import { createContext, useState } from "react";
import { CategoryTitle } from "../types";

const DEFAULT_CATEGORY = "커피";

const CategoryContext = createContext({
  currentCategory: DEFAULT_CATEGORY,
  changeCategory: (nextCategory: CategoryTitle): void => {},
});

interface CategoryProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CategoryProvider = ({ children }: CategoryProviderProps): JSX.Element => {
  const [currentCategory, setCurrentCategory] =
    useState<CategoryTitle>(DEFAULT_CATEGORY);
  const changeCategory = (nextCategory: CategoryTitle): void => {
    if (currentCategory === nextCategory) return;
    setCurrentCategory(nextCategory);
  };
  return (
    <CategoryContext.Provider
      value={{
        currentCategory,
        changeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
