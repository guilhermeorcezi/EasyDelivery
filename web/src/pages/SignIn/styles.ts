import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: center;
  color: var(--color-text-in-primary);

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const FormSide = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding:0 20px;
`;

export const Form = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    color: var(--color-text-title);
    margin-bottom: 40px;
  }

  .input-block {
    position: relative;
  }

  .input-icon {
    display: flex;
    align-items: center;
    position: relative;

    .eye-icon {
      position: absolute;
      cursor: pointer;
      top: 5;
      right: 33px;
    }
  }

  .input-block {
    display: flex;
    align-items: center;
  }

  .input-checkbox {
    margin-right: 16px;
  }

  button {
    width: 352px;
    height: 56px;
    background: var(--color-secundary);
    border-radius: 8px;
    margin-top: 5px;
    border: none;
    cursor: pointer;

    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    text-align: center;
    color: var(--color-title-in-primary);
  }

  button:hover {
    background: var(--color-secundary-dark);
  }
`;

export const Actions = styled.div`
  display: flex;
  margin: 25px 0;
  color: var(--color-text-complement);
  justify-content: space-between;

  label {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }

  span,
  a {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: var(--color-text-complement);
  }
`;

export const Footer = styled.footer`
  display: flex;
  color: var(--color-text-complement);
  justify-content: space-between;

  .register-block {
    display: flex;
    flex-direction: column;
    color: var(--color-text-base);

    span:last-child {
      color: var(--color-text-base);
      font-family: Poppins;
      font-weight: bold;
      font-size: 16px;
      line-height: 26px;
      text-decoration: underline;
    }
  }
`;
