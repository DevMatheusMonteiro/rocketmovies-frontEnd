import styled from "styled-components";

export const Container = styled.div`
  header {
    background-color: rgba(255, 133, 155, 0.1);
    height: 11.6rem;
    display: flex;
    align-items: center;
    padding: 0 6.4rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: var(--pink);

      &:focus {
        text-shadow: 0px 0px 10px var(--white);
      }
    }
  }

  main {
    position: relative;
    form {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -90px);
      width: 100%;
      max-width: 34rem;
      .image-container {
        text-align: center;
        position: relative;
        img {
          aspect-ratio: 1/1;
          width: 100%;
          height: 100%;
          max-width: 18.6rem;
          max-height: 18.6rem;
          border-radius: 50%;
          object-fit: cover;
        }

        label {
          cursor: pointer;
          position: absolute;
          bottom: 0;
          left: 200px;
          background-color: var(--pink);
          width: 4.8rem;
          height: 4.8rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: filter 0.3s ease-in-out;

          &:hover {
            filter: brightness(0.8);
          }

          svg {
            font-size: 2rem;
            color: var(--black-300);
          }
        }
      }

      .inputs-container {
        margin-top: 6.4rem;

        label + label {
          margin-top: 0.8rem;
        }

        label[for="profileCurrentPassword"] {
          margin-top: 2.4rem;
        }
      }
      button {
        margin-top: 2.4rem;
      }
    }
  }
`;
