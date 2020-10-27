import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Container, BannerSide, Content, Form } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = useCallback(() => { });

  return (
    <Container>
      <BannerSide />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Input
            name="email"
            label="Email"
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current?.focus()}
          />
          <Input
            ref={passwordInputRef}
            name="password"
            label="Senha"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />

          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          >
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
