import { useContext, useState } from "react";
import styled from "styled-components";
import { useCartDispatch } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { Product } from "../../types";
import Modal from "../common/Modal";
import ProductOptionList from "../ProductOptionList";

interface ProductProps {
  product: Product;
}

export default function ProductItem({ product }: ProductProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { optionForm, changeProductOption } = useContext(ProductContext);
  const dispatch = useCartDispatch();

  const onModalToggle = () => {
    setIsOpenModal(!isOpenModal);
    changeProductOption("quantity", 1);
  };

  const handleSubmit = () => {
    const { temperature, size, quantity } = optionForm;
    const selectedItem = {
      option: { temperature, size },
      id: 0,
      product,
      quantity,
    };
    dispatch({
      type: "CREATE",
      item: selectedItem,
    });
    setIsOpenModal(!isOpenModal);
  };

  const handleOKClick = () => {};
  return (
    <>
      {isOpenModal && (
        <Modal
          isOkBtn
          isCancelBtn
          cancelBtnFunc={onModalToggle}
          okBtnFunc={handleSubmit}
          body={<ProductOptionList />}
          header={"옵션 선택"}
        />
      )}
      <ProductWrapper onClick={onModalToggle}>{product.name}</ProductWrapper>
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
