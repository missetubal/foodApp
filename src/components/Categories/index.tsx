import React, {useEffect, useState} from 'react';
import {Container, Image} from './style';
import api from '../../service/api';
import {ScrollView} from 'react-native';
import {CategoriesProps} from './types';

// import { Container } from './styles';

const Categories: React.FC<CategoriesProps> = props => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    api
      .get('products')
      .then(data => setInfo(data.data))
      .catch(error => console.log(error));
  }, []);
  const formatUrl = (url: String) => url.replace('http', 'https');
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {info.map(item => (
        <Container
          onPress={() => {
            props.onPress(item.category);
            // console.log(item.category);
          }}>
          <Image resizeMode="stretch" source={{uri: formatUrl(item.image)}} />
        </Container>
      ))}
    </ScrollView>
  );
};

export default Categories;
