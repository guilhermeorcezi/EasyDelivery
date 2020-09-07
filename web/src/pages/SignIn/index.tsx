import React, { useState, FormEvent, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import PasswordInput from '../../components/PasswordInput';
import Input from '../../components/Input';
import BannerSide from '../../components/BannerSide';

import { Container, FormSide, Form, Actions, Footer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      /*  await signIn({
        email: data.email,
        password: data.password,
      }); */

      // history.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <BannerSide />
      <FormSide>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Fazer login</h1>

          <div className="input-block">
            <Input
              type="text"
              placeholder="E-mail"
              name="email"
              label="E-mail"
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
