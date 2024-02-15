import styled from "styled-components";

export const Label = styled.label`
  width: 100%;
  color: ${({ $error }) => ($error ? "var(--white)" : "var(--gray-200)")};
  background-color: ${({ $error }) => ($error ? "red" : "var(--black-100)")};
  display: flex;
  align-items: center;
  height: 5.6rem;
  padding: 0 1.6rem;
  border-radius: 0.8rem;

  input {
    padding-left: 0.8rem;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: transparent;
    color: var(--white);

    &::placeholder {
      color: ${({ $error }) => ($error ? "white" : "var(--gray-200)")};
    }
  }
`;
