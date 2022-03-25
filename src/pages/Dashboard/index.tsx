import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Search from '../../assets/search';
import ShoppingCart from '../../assets/shopping_cart';
import Categories from '../../components/Categories';
import { Container, Header, InputText, Right, Text, Title } from './style';

// import { Container } from './styles';



const Dashboard: React.FC = () => {
    const [value, setValue] = useState('');
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
              <ShoppingCart/>
            </Right>
          </Header>
          <Text>Categorias</Text>
          <Categories/>
          <Text>Produtos</Text>
      </Container>
  )
}

export default Dashboard;