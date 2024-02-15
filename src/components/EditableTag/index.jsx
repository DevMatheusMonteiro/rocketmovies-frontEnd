import { Container } from "./styles";

import { FiX } from "react-icons/fi";

import { RxUpdate } from "react-icons/rx";

import { useEffect, useRef, useState } from "react";

export function EditableTag({ text, makeItMutable, onBlur, remove }) {
  const paragraph = useRef();

  makeItMutable = (e) => {
    if (e.key === "Enter") {
      paragraph.current.blur();
    }

    paragraph.current.setAttribute("contentEditable", true);
    paragraph.current.focus();
    paragraph.current.innerText = "";
  };

  return (
    <Container>
      <p onBlur={onBlur} ref={paragraph}>
        {text}
      </p>

      <div className="container-buttons">
        <button type="button" onClick={(e) => makeItMutable(e)}>
          {<RxUpdate />}
        </button>
        <button type="button" onClick={remove}>
          {<FiX />}
        </button>
      </div>
    </Container>
  );
}
