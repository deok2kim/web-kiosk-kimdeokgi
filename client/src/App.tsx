import { GlobalStyle } from "./styles/globalStyle";
import MenuContainer from "./components/Body/MenuContainer";
import styled from "styled-components";
import CartContainer from "./components/Footer/CartContainer";
import Adv from "./components/Header/\bAdv";
import Modal from "./components/common/Modal";
import ProductOptionList from "./components/ProductOptionList";
import PaymentOption from "./components/PaymentOption";
import PaymentCash from "./components/PaymentCash";
import { CategoryProvider } from "./contexts/category";

const Container = styled.article`
  width: 500px;
  height: 850px;

  margin: 50px auto;
  padding: 10px 20px;
  background-color: black;
  border-radius: 20px;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Adv />
      <CategoryProvider>
        <MenuContainer />
      </CategoryProvider>
      <CartContainer />
    </Container>
  );
}

export default App;
