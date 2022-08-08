import { useState } from "react";
import styled from "styled-components";
import { Product } from "../../types/types";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [productList] = useState<Product[]>([]);
  return (
    <>
      <ProductListWrapper>
        {productList.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ProductListWrapper>
    </>
  );
}

const ProductListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;
`;
