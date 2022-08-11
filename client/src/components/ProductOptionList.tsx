import React, { useContext } from "react";
import styled from "styled-components";
import { PRODUCT_MAX, PRODUCT_MIN } from "../constants";
import { ProductContext } from "../contexts/ProductContext";
import useProductOptionList from "../hooks/useProductOptionList";
import { Product } from "../types";
import { formatPrice } from "../utils";
import ProductOptionItem from "./ProductOptionItem";

interface PaymentOptionListProps {
  product: Product;
}

export default function ProductOptionList({ product }: PaymentOptionListProps) {
  const { data: options, loading, error } = useProductOptionList();
  const { optionForm, changeProductOption } = useContext(ProductContext);
  const { quantity, extraCharge } = optionForm;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const onIncrease = () => {
    if (quantity + 1 > PRODUCT_MAX) return;
    changeProductOption("quantity", quantity + 1, extraCharge);
  };

  const onDecrease = () => {
    if (quantity - 1 < PRODUCT_MIN) return;
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
      <hr />
      <ProductWrapper>
        <Img src={product.thumbnail_img} />
        <ProductDescription>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>{formatPrice(product.price)} 원</ProductPrice>
        </ProductDescription>
      </ProductWrapper>
      <hr />
      {options.map((option) => (
        <React.Fragment key={option.id}>
          <CategoryTitle>{option.name}(필수)</CategoryTitle>
          <li>
            <ProductOptionItem
              options={option.productOptions}
              optionCategoryName={option.name}
              onProductOptionClick={handleProductOptionClick}
            />
          </li>
        </React.Fragment>
      ))}
      {/* <CategoryTitle>수량(필수)</CategoryTitle>
      <ProductCount>
        <button onClick={onDecrease}>-</button>
        <p>{optionForm.quantity}</p>
        <button onClick={onIncrease}>+</button>
      </ProductCount> */}
    </ProductOptionContainer>
  );
}

const ProductOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const CategoryTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  gap: 20px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: teal;
`;
const ProductTitle = styled.p`
  font-size: 20px;
`;
