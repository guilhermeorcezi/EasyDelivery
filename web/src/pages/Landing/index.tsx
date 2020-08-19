import React from 'react';

import imgBanner from '../../assets/images/easydelibery-banner.svg';
import { FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import logoImg from '../../assets/images/logo.png';

import { Link } from 'react-router-dom';

import './styles.css';

const Landing: React.FC = () => {
	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Easy Delivery" className="logo" />
					<h2>
						Plataforma para encontrar entregadores. Cadastre-se como um entregador para ser contactado
						ou como cliente para procurar entregadores perto de você.
					</h2>
				</div>

				<img src={imgBanner} alt="Easy Delivery" className="banner-image" />

				<div className="buttons-container">
					<Link to="/study" className="study">
						<FaUserAlt className="button-icon" />
						Me cadastrar
					</Link>

					<Link to="/give-classes" className="give-classes">
						<FaSignInAlt className="button-icon" />
						Entrar
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Landing;
