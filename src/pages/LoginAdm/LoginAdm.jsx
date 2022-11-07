import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as Styles from "./LoginAdm.styles";
import { FiUser, FiLock } from "react-icons/fi";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import imageBackground from "../../assets/login-adm.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import LoadingIcon from "../../assets/loading-gif.gif";

// import { Modal } from "../../components/Modal";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;

const LoginAdm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .put("https://hackatonfacef2022.herokuapp.com/login", {
        user: user,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          cookies.set("auth-token", response.data);
          if (response.data === "agency") {
            navigate("/costumer-list");
          } else {
            navigate("/office-list");
          }
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <Styles.LoginAdmContainer>
      <GlobalStyle />
      <Styles.Form onSubmit={(e) => handleLogin(e)}>
        <Styles.WelcomeMessage>
          Bem vindo(a), vamos começar?
        </Styles.WelcomeMessage>
        <Styles.FormContainer>
          <Styles.InputContainer>
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"Nome de usuário"}
              icon={<FiUser />}
              value={user}
              onChange={(e) => setUser(e.target.value)}
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
            <Button
              color={"#2F6FED"}
              text={
                !loading ? "Entrar" : <Styles.LoadingImg src={LoadingIcon} />
              }
              type={"submit"}
            />
          </Styles.ButtonContainer>
        </Styles.FormContainer>
      </Styles.Form>
      <Styles.ImageContainer src={imageBackground} />

      {/*
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
        */}
    </Styles.LoginAdmContainer>
  );
};

export default LoginAdm;
