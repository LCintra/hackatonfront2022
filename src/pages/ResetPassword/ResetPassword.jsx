import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as Styles from "./ResetPassword.styles";
import { FiUser, FiLock } from "react-icons/fi";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import imageBackground from "../../assets/reset-password.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;

const ResetPassword = () => {
  const [user, setUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogin = (e) => {
    e.preventDefault();
    /* axios
      .put("https://hackatom2022.herokuapp.com/login", {
        user: user,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          cookies.set("auth-token", response.data);
          navigate("/costumer-list");
        }
      }); */
  };
  return (
    <Styles.ResetPasswordContainer>
      <GlobalStyle />
      <Styles.Form onSubmit={(e) => handleLogin(e)}>
        <Styles.TitleMessage>
          Redefinição de senha
        </Styles.TitleMessage>

        <Styles.DescriptionMessage>
          Escolha sua nova senha de acesso. 
        </Styles.DescriptionMessage>
        <Styles.FormContainer>
          <Styles.InputContainer>
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"Nova Senha"}
              icon={<FiLock />}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
            />
            <Input
              width={"320px"}
              height={"48px"}
              placeholder={"Confirme"}
              icon={<FiLock />}
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
            />
          </Styles.InputContainer>
          <Styles.ButtonContainer>
            <Button text={"Salvar"} type={"submit"} />
          </Styles.ButtonContainer>
        </Styles.FormContainer>
      </Styles.Form>
      <Styles.ImageContainer src={imageBackground} />
    </Styles.ResetPasswordContainer>
  );
};

export default ResetPassword;
