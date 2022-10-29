import * as Styles from "./Modal.styles";

const Modal = ({
  children,
  active = false
}) => {
  if (!active) {
    return null
  }

  return (
    <Styles.ModalContainer>
      <Styles.ModalContentArea>{children}</Styles.ModalContentArea>
    </Styles.ModalContainer>
  );
};

export default Modal;
