import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black-100);
  padding: 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    max-width: 130px;
    background-color: transparent;
  }

  .container-buttons {
    display: flex;
    align-items: center;
    gap: 0.8rem;

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
  }
`;
