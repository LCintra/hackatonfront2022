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
  FiDownloadCloud,
} from "react-icons/fi";
import { CSVLink } from "react-csv";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { ToolTip } from "../../components/ToolTip";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "universal-cookie";
import { InfoBancaria } from "../InfoBancaria";
import moment from "moment/moment";
import LoadingIcon from "../../assets/loading-gif.gif";
import Logo from "../../assets/logo.png";

const CostumerList = () => {
  const cookies = new Cookie();
  const [showConfirmNotificationModal, setShowConfirmNotificationModal] =
    useState(false);
  const navigate = useNavigate();
  const [showPutDateModal, setShowPutDateModal] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [loading, setLoading] = useState(false);

  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");

  const [showExtract, setShowExtract] = useState(false);

  const [bankData, setBankData] = useState([]);

  const [downloadReady, setDownloadReady] = useState(false);

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }
`;
  const logoutUser = () => {
    cookies.remove("auth-token");
    window.location.reload();
  };

  const mockedCostumers = [
    {
      id: 0,
      razao: "Nome Fictício 1",
      cnpj: "21.245.436/0001-09",
      alreadyApproved: false,
    },
    {
      id: 1,
      razao: "Centro Municipal Universitário de Franca",
      cnpj: "56.987.136/3201-09",
      alreadyApproved: true,
    },
    {
      id: 2,
      razao: "Nome Fictício 3",
      cnpj: "87.987.136/0531-09",
      alreadyApproved: true,
    },
    {
      id: 3,
      razao: "Nome Fictício 4",
      cnpj: "12.987.136/2101-09",
      alreadyApproved: false,
    },
    {
      id: 4,
      razao: "Nome Fictício 5",
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
  };

  const handleDateSend = () => {
    const authToken = cookies.get("auth-token");
    setDateInitial("");
    setDateFinal("");
    setLoading(true);
    axios
      .get(
        `https://hackatonfacef2022.herokuapp.com/agency/bankreconciliation?Authorization=${authToken}`
      )
      .then((e) => {
        const filteredBankExtract = e.data.filter((extract) =>
          moment(extract.Date).isBetween(dateInitial, dateFinal)
        );
        setLoading(false);
        setShowPutDateModal(false);
        setBankData(filteredBankExtract);
        setShowExtract(true);
      });
  };

  const handleAddClient = () => {
    navigate("/create-customer");
  };

  const handleDownload = (id) => {
    const authToken = cookies.get("auth-token");
    axios
      .get(
        `https://hackatonfacef2022.herokuapp.com/agency/bankreconciliation?Authorization=${authToken}`
      )
      .then((response) => {
        setBankData(response.data);
        setDownloadReady(true);
        setSelectedId(id);
      });
  };

  const getRightIcon = (id) => {
    const icon =
      downloadReady && id === selectedId ? (
        <CSVLink data={bankData} target="_blank">
          <FiDownload
            onClick={() => {
              handleDownload(id);
            }}
          />
        </CSVLink>
      ) : (
        <FiDownloadCloud
          onClick={() => {
            handleDownload(id);
          }}
        />
      );
    return icon;
  };

  if (showExtract) {
    return <InfoBancaria setShowExtract={setShowExtract} bankData={bankData} />;
  } else
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
                    onClick={() => handleAddClient()}
                    color={"#FD620B"}
                    text={"Adicionar Cliente"}
                  />
                </Styles.ButtonContainer>
              </Styles.HeaderContainer>
              <Styles.MainListContainer>
                <Styles.ListTitle>
                  Listagem de Clientes do Escritório
                </Styles.ListTitle>
                <Styles.ListTable>
                  <Styles.Razao>Razão Social</Styles.Razao>
                  <Styles.CNPJ>CNPJ</Styles.CNPJ>
                  <Styles.Notification>Enviar Notificação?</Styles.Notification>
                  <Styles.Data>Intervalo de Data</Styles.Data>
                  <Styles.Export>Exportar Tabela?</Styles.Export>
                </Styles.ListTable>
                {mockedCostumers.map((costumer) => (
                  <Styles.ListCostumer key={costumer.id}>
                    <Styles.RazaoCostumer>
                      {costumer.razao}
                    </Styles.RazaoCostumer>
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
                        getRightIcon(costumer.id)
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
                text={
                  !loading ? "Enviar" : <Styles.LoadingImg src={LoadingIcon} />
                }
                type={"button"}
                onClick={() => handleDateSend()}
                disabled={dateInitial === "" || dateFinal === ""}
              />
            </Styles.ModalButtonContainer>
          </Styles.ModalButtonsContainer>
        </Modal>
      </>
    );
};

export default CostumerList;
