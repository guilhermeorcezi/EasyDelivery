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
    align-items: flex-end;
  }

  button {
    border: 0;
    padding: 0;
    font-size: 100%;
    font-family: inherit;
    background: var(--color-secundary);
    cursor: pointer;
    border-radius: 8px;
    height: 47px;
    width: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InputBlock = styled.div`
  width: 45%;

  margin-right: 13px;

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

