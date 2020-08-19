import React from 'react';

import imgAvatar from '../../assets/images/user-avatar.png';
import logoutIcon from '../../assets/icons/logout-icon.png';

import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';

import Header from '../../components/Header';

import './styles.css';

const Main: React.FC = () => {
	return (
		<div id="page-main">
			<Header
				leftContent={imgAvatar}
				user="Guilherme Orcezi"
				rightContent={logoutIcon}
			/>

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
						Seja bem-vindo. Procure entregadores perto de você ou mude para o
						perfil de entregador.
					</p>
					<span>O que deseja fazer?</span>
				</div>
				<div className="button-group"></div>
			</div>
		</div>
	);
};

export default Main;
