import styled from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.select`
  border-radius: 0px 0px 0px 8px;
  border: none;
  background: var(--color-input-background);
  color: var(--color-text-base);
  outline: none;
  padding: 15px 10px;

  option {
    color: var(--color-text-base);
  }

  option:checked {
    background-color: var(--color-select-selected) !important;
    border-left: 2px solid var(--color-primary);
  }
`;

export const Error = styled(Tooltip)`
  margin-right: 66px;
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
