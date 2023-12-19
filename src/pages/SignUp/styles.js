import styled from "styled-components";
import background from "../../assets/cinema_background.png";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  height: 100vh;

  > div:first-child {
    padding: 16rem 6.4rem 6.4rem;

    header {
      margin-bottom: 4.8rem;

      h1 {
        color: var(--pink);
        font-size: 4.8rem;
      }

      span {
        color: var(--gray-100);
        font-size: 1.4rem;
      }
    }

    h2 {
      margin-bottom: 4.8rem;
    }

    a {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      margin-top: 4.8rem;
      color: var(--pink);
      text-align: center;

      &:focus {
        text-shadow: 0px 0px 8px var(--white);
      }
    }
  }
`;

export const Form = styled.form`
  label + label {
    margin-top: 0.8rem;
  }

  button {
    margin-top: 2.4rem;
  }
`;

export const Background = styled.div`
  flex-grow: 1;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center left;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--black-300);
    opacity: 0.7;
  }
`;
