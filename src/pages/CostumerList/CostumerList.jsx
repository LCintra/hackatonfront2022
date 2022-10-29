import * as Styles from "./Costumer.styles";
import { createGlobalStyle } from "styled-components";
import { IconButton } from "../../components/IconButton";
import {
  FiBell,
  FiCalendar,
  FiDownload,
  FiGrid,
  FiSettings,
  FiPower,
} from "react-icons/fi";
import Cookies from "universal-cookie";

const CostumerList = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;
  const cookies = new Cookies();
  const logoutUser = () => {
    cookies.remove("auth-token");
    window.location.reload();
  };

  const mockedCostumers = [
    {
      id: 0,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
    },
    {
      id: 1,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
    },
    {
      id: 2,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
    },
    {
      id: 3,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
    },
    {
      id: 4,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
    },
  ];
  return (
    <>
      <GlobalStyle />
      <Styles.MainContainer>
        <Styles.SideMenu>
          <Styles.MenuList>
            <Styles.MenuItem>
              <FiGrid />
              Overview
            </Styles.MenuItem>
            <Styles.MenuItem>
              <FiBell />
              Notificações
            </Styles.MenuItem>
            <Styles.MenuItem>
              <FiSettings />
              Configurações
            </Styles.MenuItem>
            <Styles.MenuItem onClick={() => logoutUser()}>
              <FiPower />
              Sair
            </Styles.MenuItem>
          </Styles.MenuList>
        </Styles.SideMenu>
        <Styles.CostumerList>
          <Styles.ListContainer>
            <Styles.HeaderContainer>
              <Styles.FirstMessage>
                Bem vindo (a), vamos começar
              </Styles.FirstMessage>
              <Styles.ButtonContainer>
                <IconButton color={"#FD620B"} text={"Adicionar Cliente"} />
              </Styles.ButtonContainer>
            </Styles.HeaderContainer>
            <Styles.MainListContainer>
              <Styles.ListTitle>Listagem</Styles.ListTitle>
              <Styles.ListTable>
                <Styles.Razao>Razão Social</Styles.Razao>
                <Styles.CNPJ>CNPJ</Styles.CNPJ>
                <Styles.Notification>Enviar Notificação?</Styles.Notification>
                <Styles.Data>Intervalo de Data</Styles.Data>
                <Styles.Export>Exportar Tabela?</Styles.Export>
              </Styles.ListTable>
              {mockedCostumers.map((costumer) => (
                <Styles.ListCostumer key={costumer.id}>
                  <Styles.RazaoCostumer>{costumer.razao}</Styles.RazaoCostumer>
                  <Styles.CNPJCostumer>{costumer.cnpj}</Styles.CNPJCostumer>
                  <Styles.NotificationCostumer>
                    <FiBell />
                  </Styles.NotificationCostumer>
                  <Styles.DataCostumer>
                    <FiCalendar />
                  </Styles.DataCostumer>
                  <Styles.ExportCostumer>
                    <FiDownload />
                  </Styles.ExportCostumer>
                </Styles.ListCostumer>
              ))}
            </Styles.MainListContainer>
          </Styles.ListContainer>
        </Styles.CostumerList>
      </Styles.MainContainer>
    </>
  );
};

export default CostumerList;