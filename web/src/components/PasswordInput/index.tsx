import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import Input from '../Input';

const PasswordInput: React.FC = () => {
  const [password, setPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  function handleChangeInputType(type: string) {
    setInputType(type);
  }

  return (
    <>
      <Input
        type={inputType}
        placeholder="Senha"
        name="password"
        label="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
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
    </>
  );
};

export default PasswordInput;
