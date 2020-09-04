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
    flex-direction: column;
  }
`;

export const FormSide = styled.div`
  padding: 0 20px;
  display: grid;
  align-items: baseline;
  justify-content: center;
  flex: 1;

  img {
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  width: 352px;
  display: grid;
  align-items: center;
  justify-content: center;
  padding-top: 0;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 46px;
    color: var(--color-text-title);
    margin-bottom: 10px;
  }

  .describe {
    font-family: Poppins;
    font-weight: normal;
    font-size: 16px;
    color: var(--color-text-base);
    margin-bottom: 30px;
  }

  .input {
    width: 100%;
    height: 72px;
    background: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);
    box-sizing: border-box;
    border-radius: 8px 8px 0px 0px;
    padding: 24px 60px 24px 24px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }

  .input-block {
    position: relative;
  }

  .input-block {
    display: flex;
    align-items: center;
  }

  button {
    width: 352px;
    height: 56px;
    background: var(--color-secundary);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    justify-self: center;
    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    margin-top: 20px;
    text-align: center;
    color: var(--color-title-in-primary);
  }

  button:hover {
    background: var(--color-secundary-dark);
  }
`;
