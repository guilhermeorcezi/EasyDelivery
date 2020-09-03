import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 150px;
  background: var(--color-input-background);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  outline: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    border-radius: 10px;
    border: 1px dashed var(--color-text-complement);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text-complement);
  }

  p svg {
    color: var(--color-text-complement);
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
