import {TabRouter, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import LeftArrow from '../../assets/left arrow';
import CartItem from '../../components/CartItem';
import {BackButton, Header, Itens, Title, View} from './style';

// import { Container } from './styles';

const Cart: React.FC = ({route}) => {
  const navigation = useNavigation();
  const infoList = route.params.item;

  // console.log(infoList);
  return (
    <View>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <LeftArrow />
        </BackButton>
        <Title>Carrinho</Title>
      </Header>
      <Itens>
        <CartItem item={infoList} />
      </Itens>
      {/* <FlatList
          showsHorizontalScrollIndicator={false}
          data={infoList}
          renderItem={({item}) => <CartItem infoItem={item} />}
        /> */}
    </View>
  );
};

export default Cart;
