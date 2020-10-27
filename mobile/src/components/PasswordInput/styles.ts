import styled from 'styled-components/native';
import IconFA from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Icon = styled(IconFA)`
  position: absolute;
  cursor: pointer;
  top: 5;
  right: 42px;
`;
