import styled from 'styled-components';
import styledBackground from '../../assets/images/success-background.svg';

export const Container = styled.div`
  background: var(--color-primary) url(${styledBackground});
  width: 768px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 500px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
