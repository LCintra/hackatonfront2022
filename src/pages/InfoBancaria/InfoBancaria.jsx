import { IconButton } from "../../components/IconButton";
import * as Styles from "./InfoBancaria.styles";
import { FiArrowLeft } from "react-icons/fi";
import moment from "moment/moment";

const InfoBancaria = ({ bankData, setShowExtract }) => {
  const isFieldNull = (field) => {
    return field === "" ? "Não Informado" : field;
  };
  return (
    <Styles.MainListContainer>
      <Styles.HeaderContainer>
        <Styles.ListTitle>Listagem</Styles.ListTitle>
        <Styles.ButtonContainer>
          <IconButton
            color={"#2F6FED"}
            icon={<FiArrowLeft />}
            text={"Voltar"}
            onClick={() => setShowExtract(false)}
          />
        </Styles.ButtonContainer>
      </Styles.HeaderContainer>
      <Styles.ListTable>
        <Styles.Export>Tipo de Pessoa</Styles.Export>
        <Styles.Export>Data</Styles.Export>
        <Styles.Export>Descrição</Styles.Export>
        <Styles.Export>Documento</Styles.Export>
        <Styles.Export>Tipo Transferência</Styles.Export>
        <Styles.Export>Total</Styles.Export>
        <Styles.Export>Valor</Styles.Export>
      </Styles.ListTable>
      {bankData.map((count, index) => (
        <Styles.ListCostumer key={index}>
          <Styles.NotificationCostumer>
            {isFieldNull(count.CpfCnpj)}
          </Styles.NotificationCostumer>
          <Styles.NotificationCostumer>
            {isFieldNull(moment(count.Date, "YYYYMMDD").format("DD/MM/YYYY"))}
          </Styles.NotificationCostumer>
          <Styles.NotificationCostumer>
            {isFieldNull(count.Description)}
          </Styles.NotificationCostumer>
          <Styles.NotificationCostumer>
            {isFieldNull(count.Documento)}
          </Styles.NotificationCostumer>
          <Styles.NotificationCostumer>
            {isFieldNull(count.OperationTipe)}
          </Styles.NotificationCostumer>
          <Styles.NotificationCostumer>
            {isFieldNull(count.TotalAmmount)}
          </Styles.NotificationCostumer>
          <Styles.NotificationCostumer>
            {isFieldNull(count.Value)}
          </Styles.NotificationCostumer>
        </Styles.ListCostumer>
      ))}
    </Styles.MainListContainer>
  );
};

export default InfoBancaria;
