import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ $isnew }) =>
    $isnew ? "var(--black-300)" : "var(--black-100)"};
  border: ${({ $isnew }) => ($isnew ? "2px dashed var(--black-100)" : "none")};
  padding: 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  input {
    max-width: 130px;
    background-color: transparent;
    border: 0;
  }

  button {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: var(--pink);
    height: 100%;

    &:focus {
      outline: 1px solid var(--white);
      border-radius: 0.8rem;
    }

    > svg {
      font-size: 2rem;
    }
  }
`;
