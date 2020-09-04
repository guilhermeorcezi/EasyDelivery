import styled from 'styled-components';
import successBg from '../../assets/images/success-background.svg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary) url(${successBg}) no-repeat;
  color: var(--color-title-in-primary);
`;

export const Content = styled.div`
  max-width: 505px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .content-body {
    text-align: center;

    img {
      width: 90px;
    }

    h1,
    p {
      margin-top: 50px;
    }
  }

  .footer {
    margin-top: 80px;

    a {
      cursor: pointer;
      text-decoration: none;
      padding: 15px 40px;
      background: var(--color-secundary);
      border-radius: 8px;
      color: var(--color-title-in-primary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;
