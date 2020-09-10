import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  div {
    padding: 0 30px;
  }

  h3,
  span {
    text-transform: uppercase;
  }
`;

export const Contact = styled.button`
  background: var(--color-secundary);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 15px 30px;

  &:hover {
    background: var(--color-secundary-dark);
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
  }

  img {
    margin-right: 10px;
  }
`;
