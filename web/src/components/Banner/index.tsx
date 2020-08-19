import React from 'react';

import imgBanner from '../../assets/images/easydelibery-banner.svg';
import logoImg from '../../assets/images/logo.png';

import './styles.css';

const Banner: React.FC = () => {
	return (
		<>
			<div id="logo-container">
				<img src={logoImg} alt="Easy Delivery" className="logo" />
				<h2>Plataforma para encontrar entregadores perto de você.</h2>
			</div>

			<img src={imgBanner} alt="Easy Delivery" className="banner-image" />
		</>
	);
};

export default Banner;
