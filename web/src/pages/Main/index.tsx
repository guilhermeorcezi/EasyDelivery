import React, { useState, useCallback } from 'react';

import { FaExchangeAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';
import { useAuth } from '../../hooks/Auth';

import Header from '../../components/Header';
import Success from '../../components/SuccessPage';
import api from '../../services/api';

import { Container, Content, Footer, About, ButtonsContainer } from './styles';

const Main: React.FC = () => {
  const [successPage, setSuccessPage] = useState(false);
  const { user } = useAuth();

  const handleUpdateToDeliveryman = useCallback(async () => {
    try {
      await api.patch('users/deliveryman');

      setSuccessPage(true);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <>
      {console.log('oq', user.is_deliveryman)}
      <Container id="page-main" successPage={successPage}>
        <Header dashboardProfile />

        <Content className="container">
          <div className="container-logo">
            <img src={logoImg} alt="Easy Delivery" className="logo" />
            <h2>Encontre entregadores para os mais diversos serviços.</h2>
          </div>

          <div className="banner-content">
            <img src={imgBanner} alt="Easy Delivery" />
          </div>
        </Content>

        <Footer className="content">
          <About className="welcome">
            <p>
              Seja bem-vindo. Busque por entregadores perto de você
              {!user.is_deliveryman &&
                ` ou mude para o perfil de entregador(a)`}
              .
            </p>
            <span>O que deseja fazer?</span>
          </About>

          <ButtonsContainer className="buttons-container">
            <Link to="/list" className="sign-up">
              <FaSearch className="button-icon" size={24} />
              Buscar
            </Link>

            {!user.is_deliveryman && (
              <button
                type="button"
                onClick={() => handleUpdateToDeliveryman()}
                className="sign-in"
              >
                <FaExchangeAlt className="button-icon" size={24} />
                Fazer entregas
              </button>
            )}
          </ButtonsContainer>
        </Footer>
      </Container>
      {successPage && (
        <Success
          title="Prontinho, entregador(a)!"
          message="Que massa! Seu perfil de entregador(a) já está disponível para a pesquisa dos usuários.
          Fique de olho no seu whatsapp!"
          setSuccessPage={setSuccessPage}
        />
      )}
    </>
  );
};

export default Main;
