import React from 'react';

import imgAvatar from '../../assets/images/user-avatar.png';
import logoutIcon from '../../assets/icons/logout-icon.png';

import './styles.css';

interface Props {
	leftContent: string;
	user?: string;
	rightContent: string;
}

const Header: React.FC<Props> = ({
	leftContent,
	user,
	children,
	rightContent,
}) => {
	return (
		<header id="header" className={children ? 'header' : ''}>
			<div className="left-side">
				<img
					src={leftContent}
					className={children ? 'goBack' : ''}
					alt={leftContent}
				/>
				{user && <span>{user}</span>}
			</div>
			<div className="children">{children}</div>
			<div className="right-side">
				<img
					src={rightContent}
					alt={rightContent}
					className={children ? 'logo' : ''}
				/>
			</div>
		</header>
	);
};

export default Header;
