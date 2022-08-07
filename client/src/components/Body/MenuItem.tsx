import styled from "styled-components";

interface MenuInterface {
  id: number;
  name: string;
  price: number;
}

interface PropsInterface {
  menu: MenuInterface;
}

export default function MenuItem({ menu }: PropsInterface) {
  return (
    <>
      <MenuWrapper>{menu.name}</MenuWrapper>
    </>
  );
}

const MenuWrapper = styled.div`
  width: 100px;
  height: 120px;
  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;
