import * as Styles from "./ToolTip.styles";
import { useState } from "react";

const ToolTip = ({ children, text }) => {
  const [shouldShowToolTip, setShouldShowToolTip] = useState(false);

  return (
    <Styles.ToolTipContainer
      onMouseLeave={() => setShouldShowToolTip(false)}
      onMouseEnter={() => setShouldShowToolTip(true)}
    >
      {children}
      {shouldShowToolTip && <Styles.ToolTip>{text}</Styles.ToolTip>}
    </Styles.ToolTipContainer>
  );
};

export default ToolTip;
