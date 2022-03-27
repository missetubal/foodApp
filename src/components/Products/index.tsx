import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native';
import api from '../../service/api';
import { Container, Content, Image, Text} from './styles';

const Products: React.FC = () => {
  // console.log(item)
  
  const navigation = useNavigation();
  const [item, setItem] = useState([]);
    useEffect(() => {
        api.get('products')
            .then(data => setItem(data.data))
            .catch(error => console.log(error))
    }, [])
    const formatUrl = (url: String) => url.replace('http', 'https');
    const formatPrice = (price: String) => price.replace('.', ',');

  return (
    <Container>
        <FlatList
          data={item}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            console.log (item)
            return (
                <Content>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Details', {
                          name: item.name,
                          image: item.image,
                          description:item.description,
                          price: item.price
                        });
                      }}
                    >
                      <Image source={{ uri: (formatUrl(item.image)) }} />
                      <Text>{(item.name)}</Text>
                    </TouchableOpacity>
                    <Text>R$ {formatPrice((item.price))}</Text>
                </Content>
            );
          }}
        />

    </Container>
  );
}

export default Products;