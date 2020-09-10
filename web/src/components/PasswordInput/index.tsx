import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import Input from '../Input';

import { Container } from './styles';

interface Props {
  className?: string;
}

const PasswordInput: React.FC<Props> = ({ className }) => {
  const [inputType, setInputType] = useState('password');

  function handleChangeInputType(type: string): void {
    setInputType(type);
  }

  return (
    <Container className="input-icon">
      <Input
        type={inputType}
        placeholder="Senha"
        name="password"
        label="Senha"
        className={className}
      />
      {inputType === 'password' ? (
        <RiEyeLine
          color="#9C98A6"
          size="24"
          className="eye-icon"
          onClick={e => handleChangeInputType('text')}
        />
      ) : (
          <RiEyeOffLine
            color="#8257E5"
            size="24"
            className="eye-icon"
            onClick={e => handleChangeInputType('password')}
          />
        )}
    </Container>
  );
};

export default PasswordInput;
