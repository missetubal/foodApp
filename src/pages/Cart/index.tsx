import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import LeftArrow from '../../assets/left arrow';
import CartItem from '../../components/CartItem';
import {BackButton, Header, Itens, Title, View} from './style';

const Cart: React.FC = ({route}) => {
  const navigation = useNavigation();
  const infoList = route.params.item;

  return (
    <View>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <LeftArrow />
        </BackButton>
        <Title>Carrinho</Title>
      </Header>
      <Itens>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={infoList}
          renderItem={({item}) => <CartItem item={item} />}
        />
      </Itens>
    </View>
  );
};

export default Cart;
