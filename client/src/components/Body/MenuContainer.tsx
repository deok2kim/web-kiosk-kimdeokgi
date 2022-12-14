import { useContext } from "react";
import { CategoryContext } from "../../contexts/category";
import { Category, Product } from "../../types";
import useMenuList from "../../hooks/useMenuList";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import styled from "styled-components";
import Loading from "../common/Loading";
import useProductOptionList from "../../hooks/useProductOptionList";
import Error from "../common/Error";

export default function MenuContainer() {
  const { data, loading, error } = useMenuList();
  const {
    data: options,
    loading: optionsLoading,
    error: optionsError,
  } = useProductOptionList();
  const { currentCategory } = useContext(CategoryContext);

  if (loading || optionsLoading) return <Loading />;
  if (error || optionsError) return <Error />;

  const getCategories = (): Category[] => {
    return data.map(({ id, name }): Category => ({ id, name }));
  };

  const getProducts = (categoryName: string): Product[] | undefined => {
    return data.find((category) => category.name === categoryName)?.products;
  };

  return (
    <Container>
      <CategoryList categories={getCategories()} />
      <ProductList products={getProducts(currentCategory)} options={options} />
    </Container>
  );
}

const Container = styled.article`
  height: 670px;
`;
