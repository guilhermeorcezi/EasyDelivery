import React from 'react';

import imgAvatar from '../../assets/images/user-avatar.png';
import logoutIcon from '../../assets/icons/logout-icon.png';

import Header from '../../components/Header';

import './styles.css';

const Home: React.FC = () => {
	return (
		<div id="page-home">
			<Header
				leftContent={imgAvatar}
				user="Guilherme Orcezi"
				rightContent={logoutIcon}
			/>

			<div className="container"></div>
			<div className="content"></div>
		</div>
	);
};

export default Home;
