import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/ProductContext";
import useProductOptionList from "../hooks/useProductOptionList";
import ProductOptionItem from "./ProductOptionItem";

export default function ProductOptionList() {
  const { data: options, loading, error } = useProductOptionList();
  const { optionForm, changeProductOption } = useContext(ProductContext);
  const { quantity, extraCharge } = optionForm;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const MAX = 9,
    MIN = 1;

  const onIncrease = () => {
    console.log(extraCharge);
    if (quantity + 1 > MAX) return;
    changeProductOption("quantity", quantity + 1, extraCharge);
  };

  const onDecrease = () => {
    if (quantity - 1 < MIN) return;
    changeProductOption("quantity", quantity - 1, extraCharge);
  };

  const handleProductOptionClick = (
    optionCategory: string,
    option: string,
    extraCharge: number
  ) => {
    changeProductOption(
      optionCategory,
      option,
      optionCategory === "size" ? extraCharge : optionForm.extraCharge
    );
  };

  return (
    <ProductOptionContainer>
      {options.map((option) => (
        <li key={option.id}>
          <ProductOptionItem
            options={option.productOptions}
            optionCategoryName={option.name}
            onProductOptionClick={handleProductOptionClick}
          />
        </li>
      ))}
      <ProductCount>
        <button onClick={onDecrease}>-</button>
        <p>{optionForm.quantity}</p>
        <button onClick={onIncrease}>+</button>
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
  justify-content: space-around;
  align-items: center;
`;
