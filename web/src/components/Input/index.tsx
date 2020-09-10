import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, LabelText, InputStyled, Error } from './styled';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  textarea?: boolean;
  className?: string;
}

const Input: React.FC<IProps> = ({
  label,
  textarea,
  name,
  className,
  ...rest
}) => {
  const tag = textarea ? 'textarea' : 'input';

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <Container
        hasError={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        className={className}
        tag={tag}
      >
        <InputStyled
          as={tag}
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
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default Input;
