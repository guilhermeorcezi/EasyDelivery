import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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
  padding: 0 20px;
`;

export const Form = styled(Unform)`
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
      right: 42px;
    }
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

  .input-block {
    display: flex;
    align-items: center;
  }

  .input-checkbox {
    margin-right: 16px;
  }

  input[type='checkbox'] {
    visibility: hidden;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 8px;
    background-color: var(--color-background);
  }

  input:checked ~ .checkmark {
    background-color: var(--color-primary);
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    bottom: 5px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  label {
    padding-left: 24px;
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
