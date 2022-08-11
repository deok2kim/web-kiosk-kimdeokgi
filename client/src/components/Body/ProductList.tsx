import styled, { keyframes } from "styled-components";
import { ProductProvider } from "../../contexts/ProductContext";
import { Product, ProductOptionCategory } from "../../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[] | undefined;
  options: ProductOptionCategory[];
}

export default function ProductList({ products, options }: ProductListProps) {
  return (
    <ProductProvider>
      <ProductListWrapper>
        {products?.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} options={options} />
          </li>
        ))}
      </ProductListWrapper>
    </ProductProvider>
  );
}

const KProduct = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;
const ProductListWrapper = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;
  max-height: 700px;
  animation: ${KProduct} 3s linear;
`;
