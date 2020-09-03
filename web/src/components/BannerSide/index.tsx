import React from 'react';

import { Container } from './styles';

import logoImg from '../../assets/images/logo.png';

const BannerSide: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Easy Delivery" className="banner-image" />
    </Container>
  );
};

export default BannerSide;
