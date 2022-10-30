import * as Styles from "./OfficeList.styles";
import { createGlobalStyle } from "styled-components";
import { IconButton } from "../../components/IconButton";
import { Button } from "../../components/Button";
import {
  FiBell,
  FiCalendar,
  FiEdit3,
  FiGrid,
  FiSettings,
  FiPower,
  FiTrash,
} from "react-icons/fi";
import Cookies from "universal-cookie";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const OfficeList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const navigate = useNavigate();
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

  const handleRemove = () => {
    console.log(selectedId);
    setShowRemoveModal(false);
  };

  const mockedCostumers = [
    {
      id: 0,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
      alreadyApproved: false,
    },
    {
      id: 1,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
      alreadyApproved: true,
    },
    {
      id: 2,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
      alreadyApproved: true,
    },
    {
      id: 3,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
      alreadyApproved: false,
    },
    {
      id: 4,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "47.987.136/0001-09",
      alreadyApproved: false,
    },
  ];

  const handleClickEditButton = (id) => {
    setSelectedId(id);
  };

  const handleClickRemoveButton = (id) => {
    setShowRemoveModal(true);
    setSelectedId(id);
  };

  const handleClickAddOffice = () => {
    navigate("/create-office");
  };

  return (
    <>
      <GlobalStyle />
      <Styles.MainContainer>
        <Styles.SideMenu>
          <Styles.MenuList>
            <Styles.LogoContainer>
              <Styles.Logo src={Logo} />
              <Styles.LogoName>Earning Data</Styles.LogoName>
            </Styles.LogoContainer>
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
                <IconButton
                  onClick={() => handleClickAddOffice()}
                  color={"#FD620B"}
                  text={"Cadastrar Escritório"}
                />
              </Styles.ButtonContainer>
            </Styles.HeaderContainer>
            <Styles.MainListContainer>
              <Styles.ListTitle>Listagem de Escritórios</Styles.ListTitle>
              <Styles.ListTable>
                <Styles.Razao>Razão Social</Styles.Razao>
                <Styles.CNPJ>CNPJ</Styles.CNPJ>
                <Styles.Notification>Alterar Cadastro</Styles.Notification>
                <Styles.Data>Excluir Cadastro</Styles.Data>
              </Styles.ListTable>
              {mockedCostumers.map((costumer) => (
                <Styles.ListCostumer key={costumer.id}>
                  <Styles.RazaoCostumer>{costumer.razao}</Styles.RazaoCostumer>
                  <Styles.CNPJCostumer>{costumer.cnpj}</Styles.CNPJCostumer>
                  <Styles.EditCostumer
                    onClick={() => handleClickEditButton(costumer.id)}
                  >
                    <FiEdit3 />
                  </Styles.EditCostumer>
                  <Styles.RemoveCostumer
                    onClick={() => handleClickRemoveButton(costumer.id)}
                  >
                    <FiTrash />
                  </Styles.RemoveCostumer>
                </Styles.ListCostumer>
              ))}
            </Styles.MainListContainer>
          </Styles.ListContainer>
        </Styles.CostumerList>
      </Styles.MainContainer>
      <Modal active={showRemoveModal}>
        <Styles.ModalTitle>Atenção</Styles.ModalTitle>
        <Styles.ModalParagraph>
          Esta ação não pode ser desfeita. Deseja excluir este escritório?
        </Styles.ModalParagraph>

        <Styles.ModalButtonsContainer>
          <Styles.ModalButtonContainer>
            <Button
              text={"Não Excluir"}
              type={"button"}
              styleType={"primaryInvert"}
              onClick={() => setShowRemoveModal(false)}
            />
          </Styles.ModalButtonContainer>

          <Styles.ModalButtonContainer>
            <Button
              text={"Excluir"}
              type={"button"}
              onClick={() => handleRemove()}
            />
          </Styles.ModalButtonContainer>
        </Styles.ModalButtonsContainer>
      </Modal>
    </>
  );
};

export default OfficeList;
