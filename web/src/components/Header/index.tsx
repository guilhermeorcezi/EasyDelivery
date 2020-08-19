import React from 'react';

import imgAvatar from '../../assets/images/user-avatar.png';
import logoutIcon from '../../assets/icons/logout-icon.png';
import goBackIcon from '../../assets/icons/goback-light.png';
import imgLogo from '../../assets/images/logo.png';

import './styles.css';
interface Props {
	user?: string;
}

const Header: React.FC<Props> = ({ user, children }) => {
	return (
		<header id="header" className={children ? 'header' : ''}>
			<div className="left-side">
				<img
					src={children ? goBackIcon : imgAvatar}
					className={children ? 'goBack' : ''}
					alt={children ? 'Go Back' : 'User'}
				/>
				{user && <span>{user}</span>}
			</div>
			<div className="children">{children}</div>
			<div className="right-side">
				<img
					src={children ? imgLogo : logoutIcon}
					alt={children ? 'Easy Delivery' : 'LogOut'}
					className={children ? 'logo' : ''}
				/>
			</div>
		</header>
	);
};

export default Header;
