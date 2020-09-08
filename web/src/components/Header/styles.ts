import styled, { css } from 'styled-components';

interface HeaderProps {
  hasChildren?: boolean;
}

export const Container = styled.header<HeaderProps>`
  padding: 25px 180px;
  background: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);

  ${props =>
    props.hasChildren &&
    css`
      background: var(--color-primary-dark) !important;
    `}

  @media (max-width: 1100px) {
    justify-content: space-around;
    padding: 25px 0px;

    ${props =>
      props.hasChildren &&
      css`
        padding: 2px 0px !important;
      `}
  }

  @media (min-width: 1100px) {
    ${props =>
      props.hasChildren &&
      css`
        padding: 2px 180px !important;
      `}
  }
`;

export const Leftside = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .goBack {
    width: auto !important;
    height: auto !important;
    border-radius: 50%;
    margin-right: 24px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 24px;
  }

  span {
    text-transform: uppercase;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const Rightside = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    border: 0;
    padding: 0;
    font-size: 100%;
    font-family: inherit;
    background: none;
    cursor: pointer;
  }

  .logout {
    height: 50px;
    width: 50px;
  }

  img {
    padding: 12px;
    background: var(--color-primary-light);
    border-radius: 8px;
  }

  .logo {
    height: 60px !important;
    width: 100px !important;
    background: none;
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  .profile-content {
    padding: 50px 0 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .profile-content .profile-avatar {
    border-radius: 50%;
    width: 180px;
    margin-bottom: 30px;
  }

  .profile-content .upload-block {
    display: flex;
    background: var(--color-secundary);
    padding: 15px;
    border-radius: 50%;
    position: absolute;
    top: 180px;
    right: 50px;
    cursor: pointer;
  }

  .profile-content span {
    font-family: Archivo;
    font-weight: bold;
    font-size: 36px;
    line-height: 25px;
    text-align: center;
    color: var(--color-title-in-primary);
  }

  .container-content {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
  }

  .container-content .container-title {
    width: 600px;
  }

  .container-content h1 {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    padding: 60px 0;
    color: var(--color-title-in-primary);
  }

  .container-content .container-info {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-size: 12px;
    line-height: 20px;
    color: var(--color-text-in-primary);
    width: 150px;
  }

  .container-content .container-info img {
    height: 45px;
    width: 45px;
    margin-right: 20px;
  }

  @media (max-width: 1300px) {
    .container-content .container-title {
      text-align: center;
    }

    .container-content .container-info {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Poppins;
      font-size: 12px;
      line-height: 20px;
      color: var(--color-text-in-primary);
      margin-bottom: 80px;
      text-align: center;
      width: auto;
    }

    .container-content {
      display: block;
      margin: 0;
    }
  }
`;
