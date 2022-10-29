import * as Styles from "./IconButton.styles";
import { FiUserPlus } from "react-icons/fi";

const IconButton = ({
  icon,
  text,
  type = "button",
  onClick = () => null,
  color,
}) => {
  return (
    <Styles.IconButton color={color} onClick={() => onClick()} type={type}>
      <FiUserPlus /> {text}
    </Styles.IconButton>
  );
};

export default IconButton;
