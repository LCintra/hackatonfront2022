import * as Styles from "./Button.styles";

const Button = ({
  text,
  type = "button",
  onClick = () => null,
  styleType = "primary",
  color = "#2F6FED",
  disabled = false,
}) => {
  return (
    <Styles.Button
      color={color}
      onClick={() => onClick()}
      type={type}
      styleType={styleType}
      disabled={disabled}
    >
      {text}
    </Styles.Button>
  );
};

export default Button;
