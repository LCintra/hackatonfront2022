import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 11px;
  left: 12px;
  svg {
    color: ${({ theme }) => theme.colors.mainBlue};
    font-size: 27px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: ${({ inputHeight }) => inputHeight};
  border: 2px solid #000;
  border-radius: 5px;
  padding-left: 48px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.mainGray};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: bold;
    font-size: 14px;
    opacity: 0.5;
  }
`;
