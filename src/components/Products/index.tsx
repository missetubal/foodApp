import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import api from '../../service/api';
import { Container, Content, Image, Text } from './styles';

// import { Container } from './styles';

const Products: React.FC = () => {
  const [category, setCategory] = useState([]);
    useEffect(() => {
        api.get('products')
            .then(data => setCategory(data.data))
            .catch(error => console.log(error))
    }, [])
    const formatUrl = (url: String) => url.replace('http', 'https');
    const formatPrice = (price: String) => price.replace('.', ',');

  return (
    <Container>
        <FlatList
          data={category}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
                <Content>
                    <Image source={{ uri: formatUrl(item.image) }} />
                    <Text>{item.name}</Text>
                    <Text>R$ {formatPrice(item.price)}</Text>
                </Content>
            );
          }}
        />

    </Container>
  );
}

export default Products;