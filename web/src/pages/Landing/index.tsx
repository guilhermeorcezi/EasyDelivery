import React from 'react';

import { FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { Container, Content, ButtonsContent, BannerContent } from './styles';

import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';

const Landing: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Easy Delivery" className="logo" />
      <h2>Plataforma para encontrar entregadores perto de você.</h2>

      <ButtonsContent>
        <Link to="/signup" className="sign-up">
          <FaUserAlt className="button-icon" size={24} />
          Cadastrar
        </Link>

        <Link to="/signin" className="sign-in">
          <FaSignInAlt className="button-icon" size={24} />
          Entrar
        </Link>
      </ButtonsContent>
    </Content>

    <BannerContent>
      <img src={imgBanner} alt="Easy Delivery" className="banner-image" />
    </BannerContent>
  </Container>
);

export default Landing;
