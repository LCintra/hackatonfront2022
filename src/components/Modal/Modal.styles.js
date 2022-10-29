import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: #00000030;
`;

export const ModalContentArea = styled.div`
  position: relative;
  background-color: #fff;
  padding: 64px;
  border-radius: 8px;
`;
