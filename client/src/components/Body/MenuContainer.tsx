import { useContext } from "react";
import { CategoryContext } from "../../contexts/category";
import { Category, Product } from "../../types/types";
import useMenuList from "../hooks/useMenuList";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

export default function MenuContainer() {
  const { data, loading, error } = useMenuList();
  const { currentCategory } = useContext(CategoryContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const getCategories = (): Category[] => {
    return data.map(({ id, name }): Category => ({ id, name }));
  };

  const getProducts = (categoryName: string): Product[] | undefined => {
    return data.find((category) => category.name === categoryName)?.products;
  };

  return (
    <>
      <CategoryList categories={getCategories()} />
      <ProductList products={getProducts(currentCategory)} />
    </>
  );
}
