import * as Styles from "./Button.styles";

const Button = ({ text, type = "button", onClick = () => null }) => {
  return (
    <Styles.Button onClick={() => onClick()} type={type}>
      {text}
    </Styles.Button>
  );
};

export default Button;
