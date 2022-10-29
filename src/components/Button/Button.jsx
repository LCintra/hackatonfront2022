import * as Styles from "./Button.styles";

const Button = ({ text, type = "button", onClick = () => null, styleType = 'primary' }) => {
  return (
    <Styles.Button onClick={() => onClick()} type={type} styleType={styleType}>
      {text}
    </Styles.Button>
  );
};

export default Button;
