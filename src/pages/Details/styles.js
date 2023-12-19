import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: max-content 1fr;
  height: 100vh;

  main {
    grid-area: main;
    overflow-y: auto;
    padding: 4.8rem 6.4rem 2.4rem;

    > div {
      max-width: 1400px;
      margin: 0 auto;

      > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: var(--pink);
        width: 72px;

        &:focus {
          text-shadow: 0px 0px 10px var(--white);
        }
      }

      > div {
        header {
          display: flex;
          align-items: flex-end;
          gap: 0.8rem;
        }

        .created_by_at {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          margin-top: 2.4rem;
          span {
            display: flex;
            align-items: center;
            gap: 0.8rem;

            img {
              width: 100%;
              max-width: 2rem;
              border-radius: 50%;
              object-fit: cover;
              border: 1px solid var(--pink);
            }

            svg {
              font-size: 2rem;
              color: var(--pink);
            }
          }
        }

        .container-tags {
          margin: 4rem 0;
          display: flex;
          gap: 0.8rem;
        }

        .container-description {
          p + p {
            margin-top: 2.4rem;
          }
        }
      }
    }
  }
`;
