import styled from "styled-components";
import { Product } from "../../types/types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[] | undefined;
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      <ProductListWrapper>
        {products?.map((product) => (
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
