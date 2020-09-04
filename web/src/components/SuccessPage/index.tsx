import React from 'react';
import { Link } from 'react-router-dom';

import imgSignUpSucess from '../../assets/images/signup-success.png';

import { Container, Content } from './styles';

interface Props {
  title: string;
  message: string;
  link: string;
}

const Success: React.FC<Props> = ({ title, message, link }) => {
  return (
    <Container id="page-signup-success">
      <Content className="container">
        <div className="content-body">
          <img src={imgSignUpSucess} alt="Sign Up Success" />
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
        <div className="footer">
          <Link to="/">Voltar</Link>
        </div>
      </Content>
    </Container>
  );
};

export default Success;
