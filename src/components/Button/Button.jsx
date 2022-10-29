import * as Styles from "./Button.styles";

const Button = ({ text, type = "button", onClick = () => null, color }) => {
  return (
    <Styles.Button color={color} onClick={() => onClick()} type={type}>
      {text}
    </Styles.Button>
  );
};

export default Button;
