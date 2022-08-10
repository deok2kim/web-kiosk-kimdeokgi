import React from "react";
import styled from "styled-components";
import { ProductOption } from "../types";
import { displayPrice } from "../utils";

interface ProductOptionItemProps {
  options: ProductOption[];
  optionCategoryName: string;
  onProductOptionClick: (
    optionCategory: string,
    option: string,
    extraCharge: number
  ) => void;
}

export default function ProductOptionItem({
  options,
  optionCategoryName,
  onProductOptionClick,
}: ProductOptionItemProps) {
  return (
    <OptionItemContainer>
      {options.map(({ id, name, extraCharge }) => (
        <React.Fragment key={id}>
          <input type={"radio"} name={optionCategoryName} id={name} />
          <label
            htmlFor={name}
            key={id}
            onClick={() =>
              onProductOptionClick(optionCategoryName, name, +extraCharge)
            }
          >
            <OptionItemWrapper>
              <Title>{name}</Title>
              <ExtraCharge>+ {displayPrice(extraCharge)} 원</ExtraCharge>
            </OptionItemWrapper>
          </label>
        </React.Fragment>
      ))}
    </OptionItemContainer>
  );
}

const Title = styled.p``;
const ExtraCharge = styled.p``;
const OptionItemWrapper = styled.li`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border: 1px solid gray;
  border-radius: 5px;
  gap: 20px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  font-size: 20px;
`;

const OptionItemContainer = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + label {
    background-color: teal;
    color: white;
    li {
      border: 1px solid black;
    }
  }
`;
