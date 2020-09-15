import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, About, Number, TextAbout, Footer } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <Icon name="exchange" size={100} color="#fff" />
      </Header>

      <About>
        <Number>01.</Number>

        <TextAbout>Encontre vários professores para ensinar você</TextAbout>

        <Footer />
      </About>
    </Container>
  );
};

export default Landing;
