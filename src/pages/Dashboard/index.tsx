import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Search from '../../assets/search';
import ShoppingCart from '../../assets/shopping_cart';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import api from '../../service/api';
import { navigateTo } from '../../util/navigationUtils';
import { Container, Header, InputText, Right, Text, Title } from './style';

const Dashboard: React.FC = () => {
  const [text, onChangeText] = useState('');
  return (
    <Container>
      <Title>Food App</Title>
      <Header>
        <InputText
          onChangeText={onChangeText}
          value={text}
          placeholder={'Buscar...'}
        />

        <Right>
          <ShoppingCart />
        </Right>
      </Header>
      <Text>Categorias</Text>
      <Categories />
      <Text>Produtos</Text>
      <Products/>
    </Container>
  )
}

export default Dashboard;