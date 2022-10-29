import styled from "styled-components";

export const IconButton = styled.button`
  text-align: center;
  width: 100%;
  background-color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 500;
  border: 0px;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  padding: 10px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8px;
  }
`;
