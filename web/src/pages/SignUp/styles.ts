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
  display: grid;
  align-items: center;
  justify-content: center;
  flex: 1;
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
    line-height: 36px;
    color: var(--color-text-title);
    margin-bottom: 10px;
  }

  .describe {
    font-family: Poppins;
    font-weight: normal;
    font-size: 16px;
    color: #6a6180;
    margin-bottom: 30px;
  }

  .avatar-block {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .input-block {
    position: relative;
  }

  .input-icon {
    display: flex;
    align-items: center;
    position: relative;
  }

  .input-icon .eye-icon {
    position: absolute;
    cursor: pointer;
    top: 5;
    right: 33px;
  }

  .input-block {
    display: flex;
    align-items: center;
  }

  .input-group {
    display: flex;

    select {
      width: 50%;
    }
  }

  button {
    width: 100%;
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

    &:hover {
      background: var(--color-secundary-dark);
    }
  }
`;
