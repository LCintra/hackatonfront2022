import styled from "styled-components";

export const ToolTipContainer = styled.div`
  position: relative;
`;

export const ToolTip = styled.div`
  position: absolute;
  right: 60px;
  top: 0;
  width: 300px;
  background-color: white;
  padding: 15px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 999;
`;
