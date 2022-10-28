import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  font-size: ${(props) => (props.size === "lg" ? "24px" : "16px")};
`;
