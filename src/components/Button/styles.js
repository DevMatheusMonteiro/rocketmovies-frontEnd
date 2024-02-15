import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  border: 0;
  border-radius: 0.8rem;
  background-color: var(--pink);
  color: var(--black-300);

  &:focus {
    outline: 1px solid var(--white);
  }
`;
