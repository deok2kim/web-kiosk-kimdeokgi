import styled from "styled-components";
import { ProductProvider } from "../../contexts/ProductContext";
import { Product } from "../../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[] | undefined;
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      <ProductProvider>
        <ProductListWrapper>
          {products?.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ProductListWrapper>
      </ProductProvider>
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
