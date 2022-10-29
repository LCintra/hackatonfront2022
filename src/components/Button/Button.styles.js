import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 500;
  border: 0px;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  padding: 10px 0px;
  cursor: pointer;
`;
