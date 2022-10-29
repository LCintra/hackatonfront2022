import * as Styles from "./Button.styles";

const Button = ({
  text,
  type = "button",
  onClick = () => null,
  styleType = "primary",
  color,
}) => {
  return (
    <Styles.Button
      color={color}
      onClick={() => onClick()}
      type={type}
      styleType={styleType}
    >
      {text}
    </Styles.Button>
  );
};

export default Button;
