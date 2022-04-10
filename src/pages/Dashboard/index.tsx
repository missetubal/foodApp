import React, {useState} from 'react';
import ShoppingCart from '../../assets/shopping_cart';
import Categories from '../../components/Categories';
import Products from '../../components/Products';
import {Container, Header, InputText, Right, Text, Title} from './style';

const Dashboard: React.FC = () => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  console.log(category);

  return (
    <Container>
      <Title>Food App</Title>
      <Header>
        <InputText
          // onChangeText={onChangeText}
          value={search}
          onChangeText={value => setSearch(value)}
          placeholder={'Buscar...'}
        />
        {/* {console.log(search)} */}
        <Right>
          <ShoppingCart />
        </Right>
      </Header>
      <Text>Categorias</Text>
      <Categories onPress={value => setCategory(value)} />
      <Text>Produtos</Text>
      <Products category={category} search={search} />
    </Container>
  );
};

export default Dashboard;
