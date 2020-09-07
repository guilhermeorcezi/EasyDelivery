import styled, { css } from 'styled-components';

interface ContainerProps {}

interface InputProps {
  hasValue: string | undefined;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 72px;
  background: var(--color-box-footer);
  border: 1px solid var(--color-line-in-white);
  box-sizing: border-box;
  border-radius: 8px 8px 0px 0px;
  padding: 24px 0px 24px 24px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  position: relative;

  &:focus {
    border-left: 2px solid var(--color-primary);
  }
`;

export const InputStyled = styled.input<InputProps>`
  width: 80%;
  flex: 1;
  background: transparent;
  border: 0;
  color: '#666360';

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
          padding-top: 10px;
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
        padding-top: 10px;
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
