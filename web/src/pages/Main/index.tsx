import React from 'react';

import { FaExchangeAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';

import Header from '../../components/Header';

import './styles.css';

const Main: React.FC = () => (
  <div id="page-main">
    <Header user="Guilherme Orcezi" />

    <div className="container">
      <div className="container-logo">
        <img src={logoImg} alt="Easy Delivery" className="logo" />
        <h2>Encontre entregadores para os mais diversos serviços.</h2>
      </div>

      <div className="banner-content">
        <img src={imgBanner} alt="Easy Delivery" className="banner-image" />
      </div>
    </div>

    <div className="content">
      <div className="welcome">
        <p>
          Seja bem-vindo. Busque por entregadores perto de você ou mude para o
          perfil de entregador.
        </p>
        <span>O que deseja fazer?</span>
      </div>
      <div className="buttons-container">
        <Link to="/list" className="sign-up">
          <FaSearch className="button-icon" size={24} />
          Buscar
        </Link>

        <Link to="/sign-in" className="sign-in">
          <FaExchangeAlt className="button-icon" size={24} />
          Fazer entregas
        </Link>
      </div>
    </div>
  </div>
);

export default Main;
