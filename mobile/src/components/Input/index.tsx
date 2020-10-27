import React, {
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { TextInputProps } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, LabelText, InputStyled } from './styles';

interface IProps extends TextInputProps {
  name: string;
  label: string;
  textarea?: boolean;
  type?: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.RefForwardingComponent<IProps> = ({
  label,
  textarea,
  type,
  name,
  ...rest
}) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Container>
        <InputStyled
          name={name}
          defaultValue={defaultValue}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
        <LabelText>{label}</LabelText>
        {error && <Icon name="times-rectangle" color="#c53030" size={20} />}
      </Container>
    </>
  );
};

export default Input;
