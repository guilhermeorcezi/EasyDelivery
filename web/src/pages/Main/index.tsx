import React from 'react';

import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';

import { FaExchangeAlt, FaSearch } from 'react-icons/fa';

import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import './styles.css';

const Main: React.FC = () => {
	return (
		<div id="page-main">
			<Header user="Guilherme Orcezi" />

			<div className="container">
				<div className="container-logo">
					<img src={logoImg} alt="Easy Delivery" className="logo" />
					<h2>Encontre entregadores para os mais diversos serviços.</h2>
				</div>

				<img src={imgBanner} alt="Easy Delivery" className="banner-image" />
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
					<Link to="/sign-up" className="sign-up">
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
};

export default Main;
