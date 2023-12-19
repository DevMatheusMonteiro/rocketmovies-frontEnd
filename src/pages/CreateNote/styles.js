import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: max-content 1fr;
  height: 100vh;
  > main {
    overflow-y: auto;
    grid-area: main;
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
        margin-top: 3.2rem;
        padding-left: 1px;
        > header {
          h2 {
            font-size: 4rem;
          }
        }

        .row {
          display: flex;
          gap: 3.2rem;
          justify-content: space-between;
          margin-top: 3.2rem;

          > button:first-child {
            background-color: var(--black-300);
            color: var(--pink);

            &:focus {
              outline: 1px solid var(--pink);
            }
          }
        }

        textarea {
          border-radius: 0.8rem;
          border: none;
          width: 100%;
          height: 27.4rem;
          margin-top: 3.2rem;
          padding: 1rem;
          resize: none;
          background-color: var(--black-100);
        }

        textarea:focus {
          outline: 1px solid var(--pink);
        }

        h3 {
          margin-top: 3.2rem;
          font-size: 2.4rem;
        }

        .noteitem-container {
          margin-top: 1.6rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          background-color: var(--black-300);
          padding: 1.6rem;
          border-radius: 0.8rem;
        }
      }
    }
  }
`;
