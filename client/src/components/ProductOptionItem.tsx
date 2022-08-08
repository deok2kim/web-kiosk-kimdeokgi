import styled from "styled-components";

interface ProductOptionItemInterface {
  id: number;
  name: string;
  extra_charge: string;
}

interface PropInterface {
  options: ProductOptionItemInterface[];
}

export default function ProductOptionitem({ options }: PropInterface) {
  return (
    <OptionItemContainer>
      {options.map(({ id, name, extra_charge }) => (
        <OptionItemWrapper key={id}>
          <Title>{name}</Title>
          <ExtraCharge>+ {extra_charge}</ExtraCharge>
        </OptionItemWrapper>
      ))}
    </OptionItemContainer>
  );
}

const Title = styled.p``;
const ExtraCharge = styled.p``;
const OptionItemWrapper = styled.li`
  width: 100px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  gap: 5px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const OptionItemContainer = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
