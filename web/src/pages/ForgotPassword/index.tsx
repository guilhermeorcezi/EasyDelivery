import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import goBackIcon from '../../assets/icons/goback-blue.png';

import Input from '../../components/Input';
import BannerSide from '../../components/BannerSide';

import { Container, FormSide, Form } from './styles';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  function handleSignUp() { }

  return (
    <Container>
      <FormSide>
        <Link to="/">
          <img src={goBackIcon} alt="Back" />
        </Link>

        <Form onSubmit={handleSignUp}>
          <h1>Eita, esqueceu sua senha?</h1>
          <span className="describe">
            Não esquenta, vamos dar um jeito nisso.
          </span>

          <div className="input-group">
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
          </div>

          <button type="submit">Enviar</button>
        </Form>
      </FormSide>

      <BannerSide />
    </Container>
  );
};

export default ForgotPassword;
