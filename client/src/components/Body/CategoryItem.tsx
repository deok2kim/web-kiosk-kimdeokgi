import styled from "styled-components";

interface CategoryInterface {
  id: number;
  name: string;
}

interface PropsInterface {
  category: CategoryInterface;
}

export default function CategoryItem({ category }: PropsInterface) {
  return (
    <>
      <CategoryWrapper>{category.name}</CategoryWrapper>
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