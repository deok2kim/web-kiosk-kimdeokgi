import { useState } from "react";
import styled from "styled-components";
import ProductOptionitem from "./ProductOptionItem";

interface ProductOptionInterface {
  id: number;
  name: string;
  productOption: OptionItemInterface[];
}

interface OptionItemInterface {
  id: number;
  name: string;
  extra_charge: string;
}

export default function ProductOptionList() {
  const [options] = useState<ProductOptionInterface[]>([
    {
      id: 2,
      name: "물온도",
      productOption: [
        {
          id: 7,
          name: "아이스",
          extra_charge: "0",
        },
        {
          id: 6,
          name: "핫",
          extra_charge: "0",
        },
      ],
    },
    {
      id: 1,
      name: "사이즈",
      productOption: [
        {
          id: 10,
          name: "스몰",
          extra_charge: "0",
        },
        {
          id: 9,
          name: "미디움",
          extra_charge: "500",
        },
        {
          id: 8,
          name: "라지",
          extra_charge: "1000",
        },
      ],
    },
  ]);
  return (
    <ProductOptionContainer>
      {options.map((option) => (
        <li key={option.id}>
          <ProductOptionitem options={option.productOption} />
        </li>
      ))}
      <ProductCount>
        <p>➖</p>
        <input type={"number"} />
        <p>➕</p>
      </ProductCount>
    </ProductOptionContainer>
  );
}

const ProductOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductCount = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;
