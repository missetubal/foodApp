import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import LeftArrow from '../../assets/left arrow';
import Less from '../../assets/less';
import api from '../../service/api';
import { Header, View, Text, Image, AddToCart, AddItens, Left, Right } from './style';

// import { Container } from './styles';

const Details: React.FC = ({route}) => {
  const formatUrl = (url: String) => url.replace('http', 'https');
  const formatPrice = (price: String) => price.replace('.', ',');
  const navigation = useNavigation();
  console.log(formatUrl(route.params.image))
  return (
    <View>
      <Header>
          <TouchableOpacity
            onPress={()=> navigation.goBack()}
          >
            <LeftArrow/>
          </TouchableOpacity>
          <Text>{route.params.name}</Text>
      </Header>
      <Image source={{ uri: (formatUrl(route.params.image)) }} />
      <Text>{route.params.description}</Text>
      <AddItens>
        <Left>
          <Text>Total</Text>
          <Text>{formatPrice(route.params.price)}</Text>
        </Left>
       
       
      </AddItens>      

    </View>
      
  )
}

export default Details;

function formatUrl(image: any) {
  throw new Error('Function not implemented.');
}
