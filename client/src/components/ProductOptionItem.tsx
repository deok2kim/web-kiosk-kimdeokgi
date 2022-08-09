import { useState } from "react";
import styled from "styled-components";
import { ProductOption } from "../types";

interface ProductOptionItemProps {
  options: ProductOption[];
  optionCategoryName: string;
  onProductOptionClick: (
    e: React.MouseEvent,
    optionCategory: string,
    option: string
  ) => void;
}

export default function ProductOptionItem({
  options,
  optionCategoryName,
  onProductOptionClick,
}: ProductOptionItemProps) {
  return (
    <OptionItemContainer>
      {options.map(({ id, name, extraCharge }, idx) => (
        <label
          key={id}
          onClick={(e) => onProductOptionClick(e, optionCategoryName, name)}
        >
          <OptionItemWrapper>
            <input
              type={"radio"}
              name={optionCategoryName}
              // checked={idx === 0}
            />

            <Title>{name}</Title>
            <ExtraCharge>+ {extraCharge}</ExtraCharge>
          </OptionItemWrapper>
        </label>
      ))}
    </OptionItemContainer>
  );
}

const Title = styled.p``;
const ExtraCharge = styled.p``;
const OptionItemWrapper = styled.li`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  gap: 5px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const OptionItemContainer = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
