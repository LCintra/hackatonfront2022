import styled from "styled-components";

export const FirstMessage = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainBlue};
`;

export const ListContainer = styled.div`
  width: 90%;
  display: flex;
  margin-top: 48px;
  flex-direction: column;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
`;

export const MenuItem = styled.li`
  display: flex;
  color: white;
  font-size: 20px;
  margin-left: 18px;
  cursor: pointer;
  svg {
    margin-right: 8px;
  }
  :first-child {
    margin-top: 80px;
  }
  :last-child {
    margin-top: auto;
    margin-bottom: 20px;
  }
`;

export const SideMenu = styled.div`
  width: 20%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainBlue};
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CostumerList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 270px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const MainListContainer = styled.div`
  width: 100%;
  background-color: #fff;
  min-height: 70vh;
`;

export const ListTitle = styled.h3`
  color: #000;
  font-size: 32px;
  font-weight: bold;
  margin-top: 52px;
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

export const Razao = styled.li`
  display: flex;
  width: 100%;
  flex: 2;
  margin-left: 10px;
`;

export const CNPJ = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const Data = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  text-align: center;
`;

export const Notification = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
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

export const RazaoCostumer = styled.li`
  display: flex;
  width: 100%;
  flex: 2;
  margin-left: 10px;
`;

export const CNPJCostumer = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const DataCostumer = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.mainGreen};
    cursor: pointer;
  }
`;

export const NotificationCostumer = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.mainOrange};
    cursor: pointer;
  }
`;

export const ExportCostumer = styled.li`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.mainBlue};
    cursor: pointer;
  }
`;