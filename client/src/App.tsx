import { GlobalStyle } from "./styles/globalStyle";
import MenuContainer from "./components/Body/MenuContainer";
import styled from "styled-components";
import CartContainer from "./components/Footer/CartContainer";
import Adv from "./components/Header/\bAdv";
import { CategoryProvider } from "./contexts/category";
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Adv />
      <CartContextProvider>
        <CategoryProvider>
          <MenuContainer />
        </CategoryProvider>
        <CartContainer />
      </CartContextProvider>
    </Container>
  );
}

export default App;

const Container = styled.article`
  width: 820px;
  height: 1180px;

  margin: 0 auto;
  padding: 30px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 50px;

  position: relative;
`;
