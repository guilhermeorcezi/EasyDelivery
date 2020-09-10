import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  height: 108%;

  div {
    position: relative;
  }

  svg.close-icon {
    position: absolute;
    top: 7px;
    right: 6px;
    cursor: pointer;
  }
`;

export const Form = styled(Unform)`
  background: var(--color-box-base);
  height: 600px;
  width: 700px;
  padding: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1100px) {
    width: auto;
  }

  .input-block {
    width: 100%;
  }

  h2 {
    color: var(--color-text-title);
  }

  legend {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text-complement);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: Archivo;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-title-in-primary);
    background: var(--color-secundary);
    border-radius: 8px;
    padding: 15px 10px;
    width: 30%;
    margin: 0 auto;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: var(--color-secundary-dark);
  }

  input {
    height: 56px;
    margin-bottom: 25px;
    border-radius: 8px;
  }

  select {
    border-radius: 8px 8px 0px 0px;
    border: none;
    background: var(--color-input-background);
    color: var(--color-text-base);
    outline: none;
    padding: 15px 10px;

    option {
      color: var(--color-text-base);
    }

    option:checked {
      background-color: var(--color-select-selected) !important;
      border-left: 2px solid var(--color-primary);
    }
  }
`;
