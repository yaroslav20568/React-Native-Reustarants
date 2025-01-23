import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const Container = (styled.FlatList`
  paddingVertical: 5;
  marginVertical: 5;
` as unknown) as typeof FlatList;

export { Container };
