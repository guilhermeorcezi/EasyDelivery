import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, LabelText, InputStyled } from './styled';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<IProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      <Container>
        <InputStyled
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          hasValue={inputRef.current?.value}
          isFocused={isFocused}
          ref={inputRef}
          {...rest}
        />
        <LabelText>{label}</LabelText>
      </Container>
    </>
  );
};

export default Input;
