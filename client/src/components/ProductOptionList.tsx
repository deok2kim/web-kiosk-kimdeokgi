import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/ProductContext";
import { Product, ProductOptionCategory } from "../types";
import { formatPrice } from "../utils";
import ProductOptionItem from "./ProductOptionItem";

interface PaymentOptionListProps {
  product: Product;
  options: ProductOptionCategory[];
}

export default function ProductOptionList({
  product,
  options,
}: PaymentOptionListProps) {
  const { optionForm, changeProductOption } = useContext(ProductContext);

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
          <CategoryTitle>{option.name}</CategoryTitle>
          <li>
            <ProductOptionItem
              options={option.productOptions}
              optionCategoryName={option.name}
              onProductOptionClick={handleProductOptionClick}
            />
          </li>
        </React.Fragment>
      ))}
    </ProductOptionContainer>
  );
}

const ProductOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-left: 30px;
`;

const CategoryTitle = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 24px;
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
  color: ${(props) => props.theme.primary};
`;
const ProductTitle = styled.p`
  font-size: 20px;
`;
