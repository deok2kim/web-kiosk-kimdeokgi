import { useContext, useState } from "react";
import styled from "styled-components";
import { INIT_EXTRACHARGE, INIT_QUANTITY } from "../../constants";
import { useCartDispatch } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { Product, ProductOptionCategory } from "../../types";
import { formatPrice } from "../../utils";
import Modal from "../common/Modal";
import ProductOptionList from "../ProductOptionList";

interface ProductProps {
  product: Product;
  options: ProductOptionCategory[];
}

export default function ProductItem({ product, options }: ProductProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { optionForm, changeProductOption, initProductOptionForm } =
    useContext(ProductContext);
  const dispatch = useCartDispatch();

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
    if (!temperature || !size) {
      alert("옵션을 선택해주세요");
      return;
    }
    dispatch({
      type: "CREATE",
      item: selectedItem,
    });
    setIsOpenModal(!isOpenModal);
    initProductOptionForm();
  };

  return (
    <>
      <ProductWrapper onClick={onModalToggle}>
        <Special src="" />
        <Img src={product.thumbnail_img} />
        <Title>{product.name}</Title>
        <Price>{formatPrice(product.price)} 원</Price>
      </ProductWrapper>
      {isOpenModal && (
        <Modal
          isOkBtn
          isCancelBtn
          cancelBtnFunc={onModalToggle}
          okBtnFunc={handleSubmit}
          body={<ProductOptionList product={product} options={options} />}
        />
      )}
    </>
  );
}

const ProductWrapper = styled.div`
  width: 175px;
  height: 200px;
  gap: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Img = styled.img`
  height: 150px;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 12px;
`;

const Price = styled.p`
  font-size: 16px;
`;

const Special = styled.img`
  position: absolute;
  right: -5px;
  top: -5px;
  width: 25px;
  height: 25px;
  border-radius: 10px;
`;
