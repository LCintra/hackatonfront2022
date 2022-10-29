import * as Styles from "./Input.styles";

const Input = ({
  icon,
  height,
  placeholder,
  disabled = false,
  value,
  onChange,
  type = "text",
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
      />
    </Styles.InputContainer>
  );
};

export default Input;
