import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  color: var(--color-text-in-primary);
  background: var(--color-primary);

  .banner-image {
    width: 80%;
  }

  @media (min-width: 1100px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 50px 160px;
  }
`;

export const Content = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  display: block;
  background: var(--color-primary);


  .logo {
    width: 60%;
  }

  h2 {
    text-align: center;
    font-size: 2.4rem;
    line-height: 3.6rem;
    margin: 0.8rem 0;
    font-weight: normal;
  }

  @media (min-width: 1100px) {
    text-align: center;
    display: flex;
    flex-direction: column;

    h2 {
      max-width: 95%;
      font-size: 2.6rem;
      text-align: initial;
      line-height: 3.6rem;
      margin-top: 0.8rem;
      font-weight: normal;
    }

    .logo {
      width: 550px;
      height: 100%;
    }

    .banner-image {
      width: 500px !important;
    }
  }
`;

export const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 20rem;
    height: 9rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  a svg {
    margin-right: 1rem;
  }

  a.sign-up {
    background: var(--color-primary-light);
  }

  a.sign-in {
    background: var(--color-secundary);
  }

  a.sign-up:hover {
    background: var(--color-primary-lighter);
  }

  a.sign-in:hover {
    background: var(--color-secundary-dark);
  }

  #page-landing .container .buttons-container .button-icon {
    margin-right: 15px;
  }

  @media (min-width: 1100px) {
    justify-content: flex-start;

    a {
      width: 27rem;
    }
  }
`;
