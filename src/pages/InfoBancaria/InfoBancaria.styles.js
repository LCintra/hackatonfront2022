import styled from "styled-components";

export const MainListContainer = styled.div`
  width: 100%;
  background-color: #fff;
  min-height: 70vh;
`;

export const ListTitle = styled.h3`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  margin-left: 20px;
`;

export const ListTable = styled.ul`
  display: flex;
  margin-left: 30px;
  margin-right: 15px;
  margin-top: 42px;
  border-bottom: 1px solid rgba(47, 111, 237, 0.2);
  padding-bottom: 10px;
  gap: 30px;
`;

export const Export = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  text-align: center;
`;

export const ListCostumer = styled.ul`
  display: flex;
  margin-left: 30px;
  margin-right: 15px;
  padding: 12px 0px;
  gap: 30px;
  align-items: center;
  :nth-child(even) {
    background-color: #f8f9fc;
  }
`;

export const NotificationCostumer = styled.li`
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  margin-right: 25px;
`;
