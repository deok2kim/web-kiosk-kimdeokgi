import { useRef, useState } from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

interface CategoryInterface {
  id: number;
  name: string;
}

export default function CategoryList() {
  const [categories] = useState<CategoryInterface[]>([
    {
      id: 1,
      name: "커피",
    },
    {
      id: 2,
      name: "라뗴",
    },
    {
      id: 3,
      name: "쥬스",
    },
    {
      id: 4,
      name: "티",
    },
    {
      id: 5,
      name: "디카페인",
    },
  ]);

  return (
    <>
      <CategoriesWrapper>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryItem category={category} />
          </li>
        ))}
      </CategoriesWrapper>
    </>
  );
}

const CategoriesWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow-x: scroll;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
