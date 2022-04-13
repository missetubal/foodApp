import React from 'react';
import {Center, Container, ImageItem, Left, Text, Title} from './style';
import {CardItemProps} from './types';

// import { Container } from './styles';

const CartItem: React.FC<CardItemProps> = props => {
  const formatUrl = (url: String) => url.replace('http', 'https');
  const total = Number(props.item.price) * Number(props.item.amount);
  console.log('total: ', total);
  return (
    <Container>
      <Left>
        <ImageItem source={{uri: formatUrl(props.item.image)}} />
      </Left>
      <Center>
        <Title>{props.item.name}</Title>
        <Text>Quant.: {props.item.amount}</Text>
        <Text> R$ {total} </Text>
      </Center>
    </Container>
  );
};

export default CartItem;
