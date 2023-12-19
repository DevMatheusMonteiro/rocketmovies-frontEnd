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

      > header {
        display: flex;
        gap: 1.6rem;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: 4rem;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          background-color: var(--pink);
          padding: 1rem;
          border-radius: 0.8rem;
          color: var(--black-300);
          max-width: 200px;
          white-space: nowrap;
        }

        a:focus {
          outline: 1px solid var(--white);
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }
    }
  }
`;
