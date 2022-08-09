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
}

const ProductContext = createContext<ProductContextInterface>({
  optionForm: {
    temperature: null,
    size: null,
    quantity: 1,
    extraCharge: 0,
  },
  changeProductOption: (
    optionCategory: string,
    option: string | number,
    extraCharge: number
  ): void => {},
});

interface ProductProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ProductProvider = ({ children }: ProductProviderProps): JSX.Element => {
  const [optionForm, setOptionForm] = useState<OptionForm>({
    temperature: null,
    size: null,
    quantity: 1,
    extraCharge: 0,
  });
  const changeProductOption = (
    optionCategory: string,
    option: string | number,
    extraCharge: number
  ): void => {
    setOptionForm({ ...optionForm, [optionCategory]: option, extraCharge });
  };
  return (
    <ProductContext.Provider
      value={{
        optionForm,
        changeProductOption,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
