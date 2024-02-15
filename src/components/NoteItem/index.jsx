import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

import { useRef } from "react";

export function NoteItem({ isnew = false, ismutable, onclick, ...rest }) {
  return (
    <Container $isnew={isnew} $ismutable={ismutable}>
      <input
        placeholder="Novo marcador"
        type="text"
        tabIndex={!isnew ? -1 : 0}
        readOnly={!isnew}
        {...rest}
      />
      <button type="button" onClick={onclick}>
        {!isnew ? <FiX /> : <FiPlus />}
      </button>
    </Container>
  );
}
