import * as Styles from "./Costumer.styles";
import { createGlobalStyle } from "styled-components";
import { IconButton } from "../../components/IconButton";
import { Button } from "../../components/Button";
import {
  FiBell,
  FiCalendar,
  FiDownload,
  FiGrid,
  FiSettings,
  FiPower,
} from "react-icons/fi";
import Cookies from "universal-cookie";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { ToolTip } from "../../components/ToolTip";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "universal-cookie";

const CostumerList = () => {
  const cookies = new Cookie();
  const [showConfirmNotificationModal, setShowConfirmNotificationModal] =
    useState(false);
  const navigate = useNavigate();
  const [showPutDateModal, setShowPutDateModal] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;
  const logoutUser = () => {
    cookies.remove("auth-token");
    window.location.reload();
  };

  var pdf = require("pdf-creator-node");
  var fs = require("fs");

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

  const handleClickConfirmationIcon = (id) => {
    setShowConfirmNotificationModal(true);
    setSelectedId(id);
  };

  const handleClickDateIcon = (id) => {
    setShowPutDateModal(true);
    setSelectedId(id);
  };

  const handleSendNotification = () => {
    setShowConfirmNotificationModal(false);
    console.log(selectedId);
  };

  const handleDateSend = () => {
    const authToken = cookies.get("auth-token");
    setShowPutDateModal(false);
    setDateInitial("");
    setDateFinal("");
    axios.get(
      `https://hackatom2022.herokuapp.com/agency/bankreconciliation?Authorization=${authToken}`
    );
    console.log(selectedId, dateInitial, dateFinal);
  };

  const handleAddClient = () => {
    navigate("/create-customer");
  };

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
                <IconButton
                  onClick={() => handleAddClient()}
                  color={"#FD620B"}
                  text={"Adicionar Cliente"}
                />
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
                  <Styles.NotificationCostumer
                    onClick={() => handleClickConfirmationIcon(costumer.id)}
                  >
                    <FiBell />
                  </Styles.NotificationCostumer>
                  <Styles.DataCostumer
                    onClick={() =>
                      !costumer.alreadyApproved &&
                      handleClickDateIcon(costumer.id)
                    }
                    disabled={costumer.alreadyApproved}
                  >
                    {costumer.alreadyApproved ? (
                      <ToolTip
                        text={
                          <>
                            Seu cliente não autorizou a consulta de dados.
                            <Styles.AlertText>
                              Solicite novamente!
                            </Styles.AlertText>
                          </>
                        }
                      >
                        <FiCalendar />
                      </ToolTip>
                    ) : (
                      <FiCalendar />
                    )}
                  </Styles.DataCostumer>
                  <Styles.ExportCostumer disabled={costumer.alreadyApproved}>
                    {costumer.alreadyApproved ? (
                      <ToolTip
                        text={
                          <>
                            Seu cliente não autorizou a consulta de dados.
                            <Styles.AlertText>
                              Solicite novamente!
                            </Styles.AlertText>
                          </>
                        }
                      >
                        <FiDownload />
                      </ToolTip>
                    ) : (
                      <FiDownload />
                    )}
                  </Styles.ExportCostumer>
                </Styles.ListCostumer>
              ))}
            </Styles.MainListContainer>
          </Styles.ListContainer>
        </Styles.CostumerList>
      </Styles.MainContainer>

      <Modal active={showConfirmNotificationModal}>
        <Styles.ModalTitle>Atenção</Styles.ModalTitle>
        <Styles.ModalParagraph>
          Deseja solicitar ao cliente uma autorização para consulta dos dados
          bancários do mesmo?
        </Styles.ModalParagraph>

        <Styles.ModalButtonsContainer>
          <Styles.ModalButtonContainer>
            <Button
              text={"Não Enviar"}
              type={"button"}
              styleType={"primaryInvert"}
              onClick={() => setShowConfirmNotificationModal(false)}
            />
          </Styles.ModalButtonContainer>

          <Styles.ModalButtonContainer>
            <Button
              text={"Enviar"}
              type={"button"}
              onClick={() => handleSendNotification()}
            />
          </Styles.ModalButtonContainer>
        </Styles.ModalButtonsContainer>
      </Modal>

      <Modal active={showPutDateModal}>
        <Styles.ModalTitle>Defina o intervalo de data</Styles.ModalTitle>
        <Styles.ModalParagraph>
          Deseja solicitar ao cliente uma autorização para consulta dos dados
          bancários do mesmo?
        </Styles.ModalParagraph>

        <Styles.InputContainers>
          <Styles.DatesInputContainer>
            <Input
              icon={<FiCalendar />}
              height="48px"
              placeholder="Data Inicial"
              value={dateInitial}
              onChange={(e) => setDateInitial(e.target.value)}
              date
            />
            <Input
              icon={<FiCalendar />}
              height="48px"
              placeholder="Data Final"
              value={dateFinal}
              onChange={(e) => setDateFinal(e.target.value)}
              date
            />
          </Styles.DatesInputContainer>
        </Styles.InputContainers>

        <Styles.ModalButtonsContainer>
          <Styles.ModalButtonContainer>
            <Button
              text={"Voltar"}
              type={"button"}
              styleType={"primaryInvert"}
              onClick={() => setShowPutDateModal(false)}
            />
          </Styles.ModalButtonContainer>

          <Styles.ModalButtonContainer>
            <Button
              text={"Enviar"}
              type={"button"}
              onClick={() => handleDateSend()}
            />
          </Styles.ModalButtonContainer>
        </Styles.ModalButtonsContainer>
      </Modal>
    </>
  );
};

export default CostumerList;
