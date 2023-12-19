import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 11.6rem;
  padding: 0 6.4rem;
  border-bottom: 1px solid var(--gray-200);

  > div {
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;
    margin: 0 auto;

    > label {
      width: 50%;
    }
  }

  .profile {
    display: flex;
    color: var(--white);
    gap: 0.8rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: end;

      strong {
        text-align: right;
        font-weight: 700;
        font-size: 1.4rem;
      }

      button {
        background-color: transparent;
        border: none;
        color: var(--gray-200);

        &:focus {
          text-shadow: 0px 0px 10px var(--pink);
        }
      }
    }

    a {
      width: 6.4rem;
    }

    a:focus {
      border-radius: 50%;
      outline: 2px solid var(--pink);
    }

    img {
      width: 100%;
      height: 100%;
      border: 2px solid var(--gray-100);
      border-radius: 50%;
      object-fit: cover;
    }
  }

  h1 {
    font-size: 2.4rem;
    color: var(--pink);
  }
`;
