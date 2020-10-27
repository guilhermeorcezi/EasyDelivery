import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 72px;
  background: var(--color-box-footer);
  border: 1px solid var(--color-line-in-white);
  box-sizing: border-box;
  padding: 24px 0 24px 24px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  display: flex;
`;

export const InputStyled = styled.TextInput`
  width: 80%;
  flex: 1;
  background: transparent;
  border: 0;
  color: '#666360';
  padding-right: 74px;
  max-width: 500px;
  resize: none;
`;

export const LabelText = styled.Text`
  color: var(--color-text-complement);
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: none;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
`;
