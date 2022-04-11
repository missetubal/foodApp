import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Favorite from '../../assets/favorite';
import api from '../../service/api';
import {
  Container,
  Content,
  Image,
  InfoContent,
  Left,
  Right,
  Text,
} from './styles';
import {ProductsProps} from './types';

const Products: React.FC<ProductsProps> = props => {
  const navigation = useNavigation();
  const [item, setItem] = useState([]);
  useEffect(() => {
    api
      .get('products')
      .then(data => setItem(data.data))
      .catch(error => console.log(error));
  }, []);
  const formatUrl = (url: String) => url.replace('http', 'https');
  const formatPrice = (price: String) => price.replace('.', ',');
  const info = item.filter(item => item.category === props.category);

  return (
    <Container>
      <FlatList
        data={info}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Content>
              <TouchableOpacity
                onPress={() => {
                  // console.log(item);
                  navigation.navigate('Details', {
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    price: item.price,
                  });
                }}>
                <Image source={{uri: formatUrl(item.image)}} />
              </TouchableOpacity>
              <InfoContent>
                <Right>
                  <Text>{item.name}</Text>
                  <Text>R$ {formatPrice(item.price)}</Text>
                </Right>
                <Left
                // onPress={()=>{
                //   if (item.favorite === false )
                // }}
                >
                  <Favorite />
                </Left>
              </InfoContent>
            </Content>
          );
        }}
      />
    </Container>
  );
};

export default Products;
