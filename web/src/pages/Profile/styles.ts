import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-background-primary);
`;

export const Content = styled.div`
  background: var(--color-background-primary);
  padding: 20px;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    padding: 0 352px;
    box-sizing: border-box;
  }
`;

export const Form = styled(Unform)`
  background: var(--color-title-in-primary);
  border-radius: 8px;
  border: 1px solid var(--color-line-in-white);
  width: 100%;
  padding: 30px;
  margin-top: -90px;

  @media (min-width: 1100px) {
    margin-bottom: 20px;
    padding: 56px 64px;
  }

  legend {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text-complement);
  }

  span {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
    color: var(--color-text-title);
  }

  .input-block {
    margin-top: 25px;
  }


  .input-group {
    display: flex;
  }

  .input-group .input-block:first-child {
    margin-right: 20px;
  }

  .input-group .input-block {
    width: 50%;
  }

  .input-group .input-block select {
    width: 100%;
    border-radius: 8px;
  }
`;
