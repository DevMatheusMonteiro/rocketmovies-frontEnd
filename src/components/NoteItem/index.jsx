import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isnew = false, onclick, value, ...rest }) {
  return (
    <Container $isnew={isnew}>
      <input
        placeholder="Novo marcador"
        type="text"
        tabIndex={!isnew ? -1 : 0}
        value={value}
        readOnly={!isnew}
        {...rest}
      />
      <button type="button" onClick={onclick}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
