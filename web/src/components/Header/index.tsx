import React from 'react';

import imgAvatar from '../../assets/images/user-avatar.png';
import logoutIcon from '../../assets/icons/logout-icon.png';
import goBackIcon from '../../assets/icons/goback-light.png';
import imgLogo from '../../assets/images/logo.png';
import imgAvatarUpload from '../../assets/icons/avatar-upload.png';

import './styles.css';
interface Props {
	user?: string;
	profile?: boolean;
}

const Header: React.FC<Props> = ({ user, children, profile }) => {
	return (
		<>
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
			{children && profile && (
				<div id="header-content">
					<div className="profile-content">
						<img src={imgAvatar} className="profile-avatar" alt="User" />
						<div className="upload-block">
							<img
								src={imgAvatarUpload}
								className="avatar-upload"
								alt="Upload"
							/>
						</div>
						<span>Guilherme Orcezi</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
