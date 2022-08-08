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
      <CategoryWrapper onClick={(e) => changeCategory(category.name, e)}>
        {category.name}
      </CategoryWrapper>
    </>
  );
}

const CategoryWrapper = styled.div`
  width: 147px;
  height: 40px;
  background-color: green;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
