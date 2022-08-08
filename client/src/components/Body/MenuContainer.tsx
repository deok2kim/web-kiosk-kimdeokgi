import { Category } from "../../types/types";
import useMenuList from "../hooks/useMenuList";
import CategoryList from "./CategoryList";
import MenuList from "./MenuList";

export default function MenuContainer() {
  const { data, loading, error } = useMenuList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const getCategories = (): Category[] => {
    return data.map(({ id, name }): Category => ({ id, name }));
  };

  return (
    <>
      <CategoryList categories={getCategories()} />
      <MenuList />
    </>
  );
}
