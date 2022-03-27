import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../../service/api';
import { Container, Content, Image, Text} from './styles';

const Products: React.FC = () => {
  const navigation = useNavigation();
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
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Details')}
                    >
                      <Image source={{ uri: formatUrl(item.image) }} />
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                    <Text>R$ {formatPrice(item.price)}</Text>
                </Content>
            );
          }}
        />

    </Container>
  );
}

export default Products;