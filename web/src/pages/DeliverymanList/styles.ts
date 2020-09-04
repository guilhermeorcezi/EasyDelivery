import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-background-primary);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 390px;
  box-sizing: border-box;
  background: var(--color-background-primary);
  flex-direction: column;

  @media (max-width: 1100px) {
    padding: 0 20px;
  }
`;

export const SearchGroup = styled.div`
  border: 1px solid var(--color-line-in-white);
  border: none;
  margin-top: -78px;
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;

  .input-group {
    display: flex;
  }
`;

export const InputBlock = styled.div`
  width: 50%;

  &:first-child {
    margin-right: 20px;
  }

  legend {
    font-family: Poppins;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text-in-primary);
    margin-bottom: 8px;
  }

  select {
    width: 100%;
    border-radius: 8px;
  }
`;

export const HasNothing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--color-text-complement);
  padding-top: 100px;
`;

export const ContactContainer = styled.div`
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

  @media (max-width: 1100px) {
    form {
      width: auto;
    }
  }

  form {
    background: var(--color-box-base);
    height: 600px;
    width: 700px;
    padding: 50px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .input-block{
      width:100%;
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

    a {
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
    }

    a:hover {
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
  }

  .contact-form {
    position: relative;
  }

  svg {
    position: absolute;
    top: 7px;
    left: 6px;
    cursor: pointer;
  }
`;
