import styled from "styled-components";

export const Container = styled.span`
  > svg {
    font-size: 1.6rem;
    color: var(--pink);
    &:nth-child(1n + 2) {
      margin-left: 0.8rem;
    }
  }
`;
