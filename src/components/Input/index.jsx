import { Label } from "./styles";
import { useRef } from "react";

export function Input({ icon: Icon, id, description, error = false, ...rest }) {
  const labelRef = useRef();

  function outlineOnLabel() {
    labelRef.current.style.outline = "1px solid var(--pink)";
  }

  function disabledOutlineOnLabel() {
    labelRef.current.style.outline = "none";
  }

  return (
    <Label $error={error} ref={labelRef} htmlFor={id}>
      <span className="sr-only">{description}</span>
      {Icon && <Icon size={20} />}

      <input
        onBlur={disabledOutlineOnLabel}
        onFocus={outlineOnLabel}
        id={id}
        {...rest}
      />
    </Label>
  );
}
