import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/ProductContext";
import useProductOptionList from "../hooks/useProductOptionList";
import ProductOptionItem from "./ProductOptionItem";

export default function ProductOptionList() {
  const { data: options, loading, error } = useProductOptionList();
  const { optionForm, changeProductOption } = useContext(ProductContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const MAX = 99;
  const MIN = 1;

  const onIncrease = () => {
    if (optionForm.quantity + 1 > MAX) return;
    changeProductOption("quantity", optionForm.quantity + 1);
  };

  const onDecrease = () => {
    if (optionForm.quantity - 1 < MIN) return;
    changeProductOption("quantity", optionForm.quantity - 1);
  };

  const handleProductOptionClick = (optionCategory: string, option: string) => {
    changeProductOption(optionCategory, option);
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
        {/* TODO: 두자리 숫자로 맞추기 */}
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
