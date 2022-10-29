import styled from "styled-components";

export const ResetPasswordContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.img`
  height: 100vh;
  flex: 1;
`;

export const Form = styled.form`
  width: 60%;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleMessage = styled.h2`
  font-size: 32px;
  color: #2F6FED;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: bold;
  margin: 0px 0px 90px 0px;
  text-align: center;
`;

export const DescriptionMessage = styled.h2`
  font-size: 24px;
  color: black;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: bold;
  margin: 0px 0px 45px 0px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 369px;
`;

export const ButtonContainer = styled.div`
  padding-top: 56px;
`;
