import React from 'react';

import { Link } from 'react-router-dom';
import imgAvatar from '../../assets/images/user-avatar.png';
import logoutIcon from '../../assets/icons/logout-icon.svg';
import goBackIcon from '../../assets/icons/goback-light.png';
import imgLogo from '../../assets/images/logo.png';
import imgAvatarUpload from '../../assets/icons/avatar-upload.png';
import imgDeliveryman from '../../assets/images/deliveryman.png';

import { Container, Leftside, Rightside, Content } from './styles';

interface Props {
  user?: string;
  profile?: boolean;
  list?: boolean;
  deliveryman_amount?: number;
}

const Header: React.FC<Props> = ({
  user,
  children,
  profile,
  list,
  deliveryman_amount,
}) => (
    <>
      <Container
        className={children ? 'header' : ''}
        hasChildren={Boolean(children)}
      >
        <Leftside className="left-side">
          {children ? (
            <Link to="/">
              <img src={goBackIcon} className="goBack" alt="Go Back" />
            </Link>
          ) : (
              <img src={imgAvatar} alt="User" />
            )}

          {user && <span>{user}</span>}
        </Leftside>
        <div>{children}</div>
        <Rightside className="right-side">
          <img
            src={children ? imgLogo : logoutIcon}
            alt={children ? 'Easy Delivery' : 'LogOut'}
            className={children ? 'logo' : 'logout'}
          />
        </Rightside>
      </Container>
      {children && profile && (
        <Content id="header-content">
          <div className="profile-content">
            <img src={imgAvatar} className="profile-avatar" alt="User" />
            <div className="upload-block">
              <img src={imgAvatarUpload} className="avatar-upload" alt="Upload" />
            </div>
            <span>Guilherme Orcezi</span>
          </div>
        </Content>
      )}
      {children && list && (
        <Content id="header-content">
          <div className="container-content">
            <div className="container-title">
              <h1>Estes são os entregadores disponíveis</h1>
            </div>
            <div className="container-info">
              <img src={imgDeliveryman} alt="Deliveryman" />
            Nós temos {deliveryman_amount} entregadores.
          </div>
          </div>
        </Content>
      )}
    </>
  );

export default Header;
