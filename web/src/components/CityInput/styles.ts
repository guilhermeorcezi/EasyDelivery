import styled from 'styled-components';

export const Container = styled.select`
border-radius: 0px 0px 8px 0px;
border: none;
background: var(--color-input-background);
color: var(--color-text-base);
outline: none;
padding: 15px 10px;

  option {
  color: var(--color-text-base);

  option:checked {
	background-color: var(--color-select-selected) !important;
	border-left: 2px solid var(--color-primary);`;
