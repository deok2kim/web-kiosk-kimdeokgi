import { createContext, useState } from "react";

interface OptionForm {
  temperature: string | null;
  size: string | null;
  quantity: number;
  extraCharge: number;
}

interface ProductContextInterface {
  optionForm: OptionForm;
  changeProductOption: (
    optionCategory: string,
    option: string | number,
    extraCharge: number
  ) => void;
  initProductOptionForm: () => void;
}

const initialData = {
  temperature: null,
  size: null,
  quantity: 1,
  extraCharge: 0,
};
const ProductContext = createContext<ProductContextInterface>({
  optionForm: initialData,
  changeProductOption: (
    optionCategory: string,
    option: string | number,
    extraCharge: number
  ): void => {},
  initProductOptionForm: () => {},
});

interface ProductProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
  const [optionForm, setOptionForm] = useState<OptionForm>(initialData);
  const changeProductOption = (
    optionCategory: string,
    option: string | number,
    extraCharge: number
  ): void => {
    setOptionForm({ ...optionForm, [optionCategory]: option, extraCharge });
  };

  const initProductOptionForm = () => {
    setOptionForm(initialData);
  };
  return (
    <ProductContext.Provider
      value={{
        optionForm,
        changeProductOption,
        initProductOptionForm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
