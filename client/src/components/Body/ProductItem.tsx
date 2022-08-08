import styled from "styled-components";
import { Product } from "../../types/types";

interface ProductProps {
  product: Product;
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <>
      <ProductWrapper>{product.name}</ProductWrapper>
    </>
  );
}

const ProductWrapper = styled.div`
  width: 100px;
  height: 120px;
  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;
