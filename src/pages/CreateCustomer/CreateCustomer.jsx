import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as Styles from "./CreateCustomer.styles";
import { 
  FiLock,
  FiAward,
  FiBriefcase,
  FiAtSign,
} from "react-icons/fi";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import imageBackground from "../../assets/create-customer.png";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;

const CreateCustomer = () => {
  const [socialReason, setSocialReason] = useState("");
  const [cnpj, setCnpj] = useState("");

  return (
    <Styles.CreateCustomerContainer>
      <GlobalStyle />
      <Styles.Form onSubmit={(e) => {}}>
        <Styles.TitleMessage>
          Cadastre um cliente
        </Styles.TitleMessage>

        <Styles.DescriptionMessage>
          Precisamos de alguns dados do empresário
        </Styles.DescriptionMessage>
        <Styles.FormContainer>
          <Styles.InputContainer>
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"CRC"}
              icon={<FiAward />}
              value={socialReason}
              onChange={(e) => setSocialReason()}
            />
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"Nome do contador(a) representante"}
              icon={<FiBriefcase />}
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              type="password"
            />
          </Styles.InputContainer>
          <Styles.ButtonContainer>
            <Button text={"Cadastrar"} type={"submit"} color={"#2F6FED"} />
          </Styles.ButtonContainer>
        </Styles.FormContainer>
      </Styles.Form>
      <Styles.ImageContainer src={imageBackground} />
    </Styles.CreateCustomerContainer>
  );
};

export default CreateCustomer;
