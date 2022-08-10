import { useContext } from "react";
import styled from "styled-components";
import { CategoryContext } from "../../contexts/category";
import { Category } from "../../types";
interface PropsInterface {
  category: Category;
}

export default function CategoryItem({ category }: PropsInterface) {
  const { changeCategory } = useContext(CategoryContext);
  return (
    <>
      <CategoryWrapper onClick={() => changeCategory(category.name)}>
        {category.name}
      </CategoryWrapper>
    </>
  );
}

const CategoryWrapper = styled.div`
  width: 200px;
  height: 50px;
  font-size: 24px;
  background-color: inherit;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
