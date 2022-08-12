import { useContext } from "react";
import styled from "styled-components";
import { CategoryContext } from "../../contexts/category";
import { Category } from "../../types";
interface PropsInterface {
  category: Category;
}

export default function CategoryItem({ category }: PropsInterface) {
  const { currentCategory, changeCategory } = useContext(CategoryContext);

  const isSelectedCurrentCategory = () => category.name === currentCategory;
  return (
    <CategoryWrapper
      onClick={() => changeCategory(category.name)}
      disabled={isSelectedCurrentCategory()}
    >
      {category.name}
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.label};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  &:enabled:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
  }
  &:disabled {
    color: ${(props) => props.theme.primary};
    font-size: 28px;
  }
`;
