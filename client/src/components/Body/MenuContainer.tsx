import { useContext } from "react";
import { CategoryContext } from "../../contexts/category";
import { Category, Product } from "../../types";
import useMenuList from "../../hooks/useMenuList";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import styled from "styled-components";
import Loading from "../common/Loading";

export default function MenuContainer() {
  const { data, loading, error } = useMenuList();
  const { currentCategory } = useContext(CategoryContext);

  if (loading) return <Loading />;
  if (error) return <div>Error...</div>;

  const getCategories = (): Category[] => {
    return data.map(({ id, name }): Category => ({ id, name }));
  };

  const getProducts = (categoryName: string): Product[] | undefined => {
    return data.find((category) => category.name === categoryName)?.products;
  };

  return (
    <Container>
      <CategoryList categories={getCategories()} />
      <ProductList products={getProducts(currentCategory)} />
    </Container>
  );
}

const Container = styled.article`
  height: 670px;
`;
