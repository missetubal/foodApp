import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import More from '../../assets/more';
import LeftArrow from '../../assets/left arrow';
import Less from '../../assets/less';
import {
  Header,
  View,
  Text,
  Image,
  AddItens,
  Left,
  Right,
  Button,
  AddToCart,
  TextButton,
} from './style';

// import { Container } from './styles';

const Details: React.FC = ({route}) => {
  const formatUrl = (url: String) => url.replace('http', 'https');
  const formatPrice = (price: String) => price.replace('.', ',');
  const navigation = useNavigation();

  const [amount, setAmount] = useState(0);
  // const [isVisible, setVisible] = useState(false);

  return (
    <View>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
        <Text>{route.params.name}</Text>
      </Header>
      <Image source={{uri: formatUrl(route.params.image)}} />
      <Text style={{marginBottom: 10}}>{route.params.description}</Text>
      <AddItens>
        <Left>
          <Text>Total</Text>
          <Text>R$ {formatPrice(route.params.price)}</Text>
        </Left>
        <Right>
          <Button
            onPress={() => {
              setAmount(amount - 1);
            }}>
            <Less />
          </Button>
          <TextInput value={String(amount)} style={{margin: 10}} />
          <Button
            onPress={() => {
              setAmount(amount + 1);
            }}>
            <More />
          </Button>
        </Right>
      </AddItens>
      <AddToCart>
        <TextButton>Adicionar ao carrinho</TextButton>
      </AddToCart>
    </View>
  );
};

export default Details;
