import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import api from '../../service/api';
import { Container, Image } from './styles';

// import { Container } from './styles';

const Products: React.FC = () => {
  const [category, setCategory] = useState([]);
    useEffect(() => {
        api.get('products')
            .then(data => setCategory(data.data))
            .catch(error => console.log(error))
    }, [])
    const formatUrl = (url: String) => url.replace('http', 'https');

  return (
    <Container>
        {/* <ScrollView 
            showsHorizontalScrollIndicator={false}
        >
            {
                category?.map(item => (
                    <Container>
                        <Image source={{ uri: formatUrl(item.image) }} />
                    </Container>
                ))
            }
        </ScrollView> */}
        <FlatList
          data={category}
          keyExtractor={item => item.image}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              // category?.map(item => (
                <Container>
                    <Image source={{ uri: formatUrl(item.image) }} />
                </Container>
            );
          }}
        />

    </Container>
  );
}

export default Products;