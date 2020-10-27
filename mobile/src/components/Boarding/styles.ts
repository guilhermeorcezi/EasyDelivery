import styled, { css } from 'styled-components/native';

interface IAbout {
  number: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View<IAbout>`
  background-color: #8257e5;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 350px;

  ${props =>
    props.number === '02' &&
    css`
      background-color: #04d361;
    `}
`;

export const About = styled.View`
  width: 100%;
  flex: 1;
  padding: 76px 40px 96px 40px;
  background-color: #e5e5e5;
`;

export const Number = styled.Text`
  color: #6a6180;
  opacity: 0.16;
  font-size: 44px;
  font-family: Archivo;
`;

export const TextAbout = styled.Text`
  margin-top: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: #6a6180;
  font-family: Poppins;
  max-width: 250px;
`;

export const Footer = styled.View`
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Dots = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DotCheck = styled.Image`
  margin-right: 10px;
`;

export const Dot = styled.Image``;
