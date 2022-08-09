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

  const INIT_QUANTITY = 1,
    INIT_EXTRACHARGE = 0;
  const initProductOption = () =>
    changeProductOption("quantity", INIT_QUANTITY, INIT_EXTRACHARGE);

  const onModalToggle = () => {
    setIsOpenModal(!isOpenModal);
    initProductOption();
  };

  const handleSubmit = () => {
    const { temperature, size, quantity, extraCharge } = optionForm;
    const selectedItem = {
      option: { temperature, size, extraCharge },
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

  const MODAL_TITLE = "옵션 선택";
  return (
    <>
      {isOpenModal && (
        <Modal
          isOkBtn
          isCancelBtn
          cancelBtnFunc={onModalToggle}
          okBtnFunc={handleSubmit}
          body={<ProductOptionList />}
          header={MODAL_TITLE}
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
