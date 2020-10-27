import React, { useState } from 'react';
import Input from '../Input';

import { Container, Icon } from './styles';

interface Props {
  className?: string;
}

const PasswordInput: React.FC<Props> = ({ className }) => {
  const [inputType, setInputType] = useState('password');

  function handleChangeInputType(type: string): void {
    setInputType(type);
  }

  return (
    <Container>
      <Input
        type={inputType}
        placeholder="Senha"
        name="password"
        label="Senha"
        className={className}
      />
      {inputType === 'password' ? (
        <Icon
          name="eye"
          color="#9C98A6"
          size={24}
          onPress={e => handleChangeInputType('text')}
        />
      ) : (
        <Icon
          name="eye-slash"
          color="#8257E5"
          size={24}
          onPress={e => handleChangeInputType('password')}
        />
      )}
    </Container>
  );
};

export default PasswordInput;
