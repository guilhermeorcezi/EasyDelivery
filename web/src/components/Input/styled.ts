import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  hasError: boolean;
  isFilled: boolean;
  isFocused: boolean;
  tag: string;
}
interface InputProps {
  hasValue: string | undefined;
  isFocused: boolean;
  as?: string;
}

export const Container = styled.div<ContainerProps>`
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

  &:focus {
    border-left: 2px solid var(--color-primary);
  }

  ${props =>
    props.isFilled &&
    css`
      border-color: var(--color-secundary);
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: var(--color-error);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-secundary);
      border-color: var(--color-secundary);
    `}

  ${props =>
    props.tag === 'textarea' &&
    css`
      min-height: 240px;
    `}
`;

export const InputStyled = styled.input<InputProps>`
  width: 80%;
  flex: 1;
  background: transparent;
  border: 0;
  color: '#666360';
  padding-right: 74px;
  max-width: 500px;
  resize: none;

  ${({ as }) => {
    return (
      as === 'textarea' &&
      css`
        max-width: none;
        padding-right: 45px;
        width:100%;
      `
    );
  }}

  ${({ value }) => {
    return (
      value &&
      css`
        & + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
          display: flex;
          align-items: center;
          padding-top: 20px;
          font-size: 24px;
        }
        & {
          padding-top: 20px;
          padding-bottom: 10px;
        }
      `
    );
  }}

  ${({ isFocused }) =>
    isFocused &&
    css`
      & + ${LabelText} {
        transform: scale(0.6) translateY(-10px);
        display: flex;
        align-items: center;
        padding-top: 20px;
        font-size: 24px;
      }
      & {
        padding-top: 20px;
        padding-bottom: 10px;
      }
    `}
`;

export const LabelText = styled.span`
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

export const Error = styled(Tooltip)`
  margin-right: 16px;
  z-index: 3;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
