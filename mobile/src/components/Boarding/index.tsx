import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Dots,
  About,
  Number,
  TextAbout,
  Footer,
  Dot,
  DotCheck,
} from './styles';

import dotCheckIcon from '../../assets/icons/dotCheck.png';
import dotIcon from '../../assets/icons/dot.png';
import arrowIcon from '../../assets/icons/arrow.png';

interface IBoarding {
  number: string;
  textAbout: string;
}

const Boarding: React.FC<IBoarding> = ({ number, textAbout }) => {
  return (
    <Container>
      <Header number={number}>
        <Icon
          name={number === '01' ? 'search' : 'exchange'}
          size={100}
          color="#fff"
        />
      </Header>

      <About>
        <Number>{number}.</Number>

        <TextAbout>{textAbout}</TextAbout>

        <Footer>
          <Dots>
            <DotCheck source={number === '01' ? dotCheckIcon : dotIcon} />
            <Dot source={number === '02' ? dotCheckIcon : dotIcon} />
          </Dots>
          <Image source={arrowIcon} />
        </Footer>
      </About>
    </Container>
  );
};

export default Boarding;
