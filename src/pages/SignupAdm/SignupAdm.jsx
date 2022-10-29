import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as Styles from "./SignupAdm.styles";
import { 
  FiLock,
  FiAward,
  FiBriefcase,
  FiAtSign,
} from "react-icons/fi";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import imageBackground from "../../assets/signup-adm.png";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;

const SignupAdm = () => {
  const [crc, setCrc] = useState("");
  const [representantName, setRepresentantName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Styles.SignupAdmContainer>
      <GlobalStyle />
      <Styles.Form onSubmit={(e) => {}}>
        <Styles.TitleMessage>
          Falta pouco!
        </Styles.TitleMessage>

        <Styles.DescriptionMessage>
          Precisamos de mais alguns dados 😉
        </Styles.DescriptionMessage>
        <Styles.FormContainer>
          <Styles.InputContainer>
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"CRC"}
              icon={<FiAward />}
              value={crc}
              onChange={(e) => setCrc()}
            />
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"Nome do contador(a) representante"}
              icon={<FiBriefcase />}
              value={representantName}
              onChange={(e) => setRepresentantName(e.target.value)}
              type="password"
            />
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"E-mail"}
              icon={<FiAtSign />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="password"
            />
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"Senha"}
              icon={<FiLock />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Styles.InputContainer>
          <Styles.ButtonContainer>
            <Button text={"Cadastrar"} type={"submit"} />
          </Styles.ButtonContainer>
        </Styles.FormContainer>
      </Styles.Form>
      <Styles.ImageContainer src={imageBackground} />

      {
        /*
        <Modal active={false}>
          <Styles.ModalTitle>Quase lá!</Styles.ModalTitle>
          <Styles.ModalParagraph>Notamos que esse é seu primeiro login na nossa plataforma.</Styles.ModalParagraph>
          <Styles.ModalParagraph>Deseja alterar sua senha?</Styles.ModalParagraph>
          
          <Styles.ModalButtonsContainer>
            <Styles.ModalButtonContainer>
              <Button text={"Não Alterar"} type={"button"} styleType={"primaryInvert"} />
            </Styles.ModalButtonContainer>

            <Styles.ModalButtonContainer>
              <Button text={"Alterar"} type={"button"} />
            </Styles.ModalButtonContainer>
            
          </Styles.ModalButtonsContainer>
        </Modal>
        */
      }
      
    </Styles.SignupAdmContainer>
  );
};

export default SignupAdm;
