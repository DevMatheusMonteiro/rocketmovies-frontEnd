import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: block;
  padding: 2.4rem;
  background-color: var(--black-300);
  border-radius: 1rem;
  width: 100%;

  &:focus {
    border: 1px solid var(--pink);
  }

  > .title-rant {
    h3 {
      font-size: 2.4rem;
      color: var(--white);
      margin-bottom: 0.8rem;
    }
  }

  > p {
    color: var(--gray-100);
    margin: 2.4rem 0;
  }

  > .container-tags {
    width: 100%;
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
  }
`;
