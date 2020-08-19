import React from 'react';

import { FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import './styles.css';
import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';

const Landing: React.FC = () => {
	return (
		<div id="page-landing">
			<div className="container">
				<img src={logoImg} alt="Easy Delivery" className="logo" />
				<h2>Plataforma para encontrar entregadores perto de você.</h2>
				
				<div className="buttons-container">
					<Link to="/sign-up" className="sign-up">
						<FaUserAlt className="button-icon" size={24} />
						Cadastrar
					</Link>

					<Link to="/sign-in" className="sign-in">
						<FaSignInAlt className="button-icon" size={24} />
						Entrar
					</Link>
				</div>

			</div>

			<img src={imgBanner} alt="Easy Delivery" className="banner-image" />
		</div>
	);
};

export default Landing;
