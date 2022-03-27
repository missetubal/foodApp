import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Search from '../../assets/search';
import ShoppingCart from '../../assets/shopping_cart';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import { Container, Header, InputText, Right, Text, Title } from './style';

const Dashboard: React.FC = () => {
  const [text, onChangeText] = useState('');
  const navigation = useNavigation();

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

function props(props: any) {
  throw new Error('Function not implemented.');
}
