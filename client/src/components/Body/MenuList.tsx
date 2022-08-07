import { useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

interface MenuInterface {
  id: number;
  name: string;
  price: number;
}

export default function MenuList() {
  const [menuList] = useState<MenuInterface[]>([
    {
      id: 1,
      name: "초코라떼",
      price: 5000,
    },
    {
      id: 2,
      name: "초코라떼2",
      price: 5000,
    },
    {
      id: 3,
      name: "초코라떼3",
      price: 5000,
    },
    {
      id: 4,
      name: "초코라떼4",
      price: 5000,
    },
    {
      id: 5,
      name: "초코라떼5",
      price: 5000,
    },
    {
      id: 6,
      name: "초코라떼",
      price: 5000,
    },
    {
      id: 7,
      name: "초코라떼2",
      price: 5000,
    },
    {
      id: 8,
      name: "초코라떼3",
      price: 5000,
    },
    {
      id: 9,
      name: "초코라떼4",
      price: 5000,
    },
    {
      id: 10,
      name: "초코라떼5",
      price: 5000,
    },
  ]);
  return (
    <>
      <MenuListWrapper>
        {menuList.map((menu) => (
          <li key={menu.id}>
            <MenuItem menu={menu} />
          </li>
        ))}
      </MenuListWrapper>
    </>
  );
}

const MenuListWrapper = styled.ul`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;
`;
