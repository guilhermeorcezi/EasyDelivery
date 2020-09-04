import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import PasswordInput from '../../components/PasswordInput';
import Input from '../../components/Input';
import BannerSide from '../../components/BannerSide';

import { Container, FormSide, Form, Actions, Footer } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');

  function handleLogin(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Container>
      <BannerSide />
      <FormSide>
        <Form onSubmit={handleLogin}>
          <h1>Fazer login</h1>

          <div className="input-block">
            <Input
              type="text"
              placeholder="E-mail"
              name="email"
              label="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-icon">
            <PasswordInput />
          </div>

          <Actions>
            <div className="input-block">
              <input
                type="checkbox"
                id="remember_pwd"
                name="remember_pwd"
                className="input-checkbox"
              />
              <label htmlFor="remember_pwd">Lembrar-me</label>
            </div>
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Actions>

          <button type="submit">Entrar</button>
        </Form>

        <Footer>
          <div className="register-block">
            <span>Não tem conta?</span>
            <Link to="/signup">Cadastre-se</Link>
          </div>
          <span>É de graça</span>
        </Footer>
      </FormSide>
    </Container>
  );
};

export default Login;
