import * as Styles from "./Input.styles";
import moment from "moment";

const Input = ({
  icon,
  height,
  placeholder,
  disabled = false,
  value,
  onChange,
  type = "text",
  date = false,
}) => {
  return (
    <Styles.InputContainer>
      <Styles.IconContainer>{icon}</Styles.IconContainer>
      <Styles.Input
        disabled={disabled}
        placeholder={placeholder}
        inputHeight={height}
        value={value}
        onChange={onChange}
        type={type}
        onFocus={(e) => {
          if (date) {
            e.target.type = "date";
          }
        }}
        onBlur={(e) => {
          if (date) {
            e.target.type = "text";
            // const formatedDate = moment(value, "YYYYMMDD").format("DD/MM/YYYY");
            // e.target.value =
            //   formatedDate !== "Invalid date" ? formatedDate : "";
          }
        }}
      />
    </Styles.InputContainer>
  );
};

export default Input;
