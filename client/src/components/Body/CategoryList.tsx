import styled from "styled-components";
import { Category } from "../../types";
import CategoryItem from "./CategoryItem";
interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
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
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
