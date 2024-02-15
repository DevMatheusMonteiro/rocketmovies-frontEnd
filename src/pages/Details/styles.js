import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "main";
  grid-template-rows: max-content 1fr;
  height: 100vh;

  main {
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

      header {
        margin-top: 4.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div.title-stars {
          display: flex;
          align-items: flex-end;
          gap: 0.8rem;
        }

        div.buttons {
          display: flex;
          justify-content: flex-end;
          gap: 0.8rem;

          width: 50%;

          button:last-child {
            background-color: var(--pink);
            color: var(--black-300);
          }

          button {
            letter-spacing: 2px;
            font-weight: bold;
            max-height: 30px;
            max-width: 100px;
            background-color: var(--black-100);
            color: var(--white);
          }
        }
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
            aspect-ratio: 1/1;
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
        height: 50vh;
        textarea {
          border: none;
          background-color: transparent;
          width: 100%;
          height: 100%;
          resize: none;
        }
      }
    }
  }
`;
