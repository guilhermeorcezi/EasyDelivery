import styled, { css } from 'styled-components';

interface SuccessProps {
  successPage: boolean;
}

export const Container = styled.main<SuccessProps>`
  ${({ successPage }) => {
    return successPage
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `;
  }}

  width: 100vw;
  height: 100vh;
  flex-direction: column;
  color: var(--color-text-in-primary);
  background: var(--color-background-primary);
`;

export const Content = styled.div`
  padding-top: 30px;
  display: flex;
  text-align: center;
  flex-direction: column-reverse;
  background: var(--color-primary);

  .logo {
    width: 60%;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin: 0.8rem 0;
    font-weight: normal;
  }

  .banner-content {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
    }
  }

  @media (min-width: 1100px) {
    background: var(--color-primary);
    color: var(--color-text-in-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 180px;
    flex-direction: row;

    .banner-content {
      justify-content: flex-end;
    }

    .container-logo {
      width: 450px;
      text-align: initial;
    }

    h2 {
      font-size: 2.4rem;
      line-height: 3.6rem;
      margin-top: 0.8rem;
      font-weight: normal;
    }

    .logo {
      width: 450px;
      height: 180px;
      height: 100%;
    }

    .banner-image {
      width: 500px;
    }
  }
`;

export const Footer = styled.footer`
  background: var(--color-background-primary);

  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 180px;
    height: 100%;
  }
`;

export const About = styled.div`
  padding: 30px 10px 20px 30px;

  p {
    font-family: Poppins;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    color: var(--color-text-base);
    margin-bottom: 10px;
  }

  span {
    font-family: Poppins;
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
    color: var(--color-text-base);
    font-weight: bolder;
  }

  @media (min-width: 1100px) {
    padding: 0 60px 0 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a,
  button {
    width: 23rem;
    height: 7rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;
    border: none;
    cursor: pointer;
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  a img {
    margin-right: 1rem;
  }

  a.sign-up {
    background: var(--color-primary);
  }

  button.sign-in {
    background: var(--color-secundary);
  }

  a.sign-up:hover {
    background: var(--color-primary-light);
  }

  button.sign-in:hover {
    background: var(--color-secundary-dark);
  }

  .button-icon {
    margin-right: 15px;
  }
`;
