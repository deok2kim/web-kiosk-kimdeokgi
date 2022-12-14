import { useContext, useState } from "react";
import styled from "styled-components";
import { INIT_EXTRACHARGE, INIT_QUANTITY } from "../../constants";
import { useCartDispatch } from "../../contexts/CartContext";
import { ProductContext } from "../../contexts/ProductContext";
import { Product, ProductOptionCategory } from "../../types";
import { formatPrice } from "../../utils";
import Alert from "../common/Alert";
import Modal from "../common/Modal";
import ProductOptionList from "../ProductOptionList";

interface ProductProps {
  product: Product;
  options: ProductOptionCategory[];
}

export default function ProductItem({ product, options }: ProductProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenALert, setIsAlertOpen] = useState(false);
  const { optionForm, changeProductOption, initProductOptionForm } =
    useContext(ProductContext);
  const dispatch = useCartDispatch();

  const initProductOption = () =>
    changeProductOption("quantity", INIT_QUANTITY, INIT_EXTRACHARGE);

  const onModalToggle = () => {
    setIsOpenModal(!isOpenModal);
    initProductOption();
  };

  const onAlertToggle = () => {
    setIsAlertOpen(!isOpenALert);
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
      onAlertToggle();
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
        {/* <Special src="" /> */}
        <Img src={product.thumbnail_img} />
        <Title>{product.name}</Title>
        <Price>{formatPrice(product.price)} 원</Price>
      </ProductWrapper>
      {isOpenModal && (
        <Modal
          isOkBtn
          okBtnTitle="담기"
          isCancelBtn
          cancelBtnTitle="뒤로가기"
          cancelBtnFunc={onModalToggle}
          okBtnFunc={handleSubmit}
          body={<ProductOptionList product={product} options={options} />}
        />
      )}
      {isOpenALert && (
        <Alert text={"옵션을 선택해주세요 🙏"} close={onAlertToggle} />
      )}
    </>
  );
}

const ProductWrapper = styled.div`
  width: 178px;
  height: 220px;
  gap: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  cursor: pointer;
`;

const Img = styled.img`
  height: 150px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow.default};
  &:active {
    box-shadow: ${(props) => props.theme.boxShadow.active};
  }
`;

const Title = styled.p`
  font-size: 18px;
  width: 110%;
  text-align: center;
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
