import { useState } from "react";
import styled from "styled-components";
import { Product } from "../../types";
import Modal from "../common/Modal";
import ProductOptionList from "../ProductOptionList";

interface ProductProps {
  product: Product;
}

export default function ProductItem({ product }: ProductProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      {isOpenModal && (
        <Modal
          isOkBtn
          isCancelBtn
          cancelBtnFunc={onToggleModal}
          body={<ProductOptionList />}
          header={"옵션 선택"}
        />
      )}
      <ProductWrapper onClick={onToggleModal}>{product.name}</ProductWrapper>
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
