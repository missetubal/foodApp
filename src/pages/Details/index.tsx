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
  Heart,
} from './style';
import {itemCartStore} from '../../components/zustore';
import Favorite from '../../assets/favorite';

const Details: React.FC = ({route}) => {
  const formatUrl = (url: String) => url.replace('http', 'https');
  const formatPrice = (price: String) => price.replace('.', ',');
  const navigation = useNavigation();

  const [amount, setAmount] = useState(0);
  const item = route.params;
  // console.log(item);

  const itensList = itemCartStore(state => state.cardItens);
  const addItem = itemCartStore(state => state.addItem);
  console.log(itensList);
  // const removeItem = itemCartStore(state => state.removeItem);
  // const updateItem = itemCartStore(state => state.updateItem);

  // const handleNewItem = infoList => {
  //   // if (infoList.id) {
  //   //   updateItem({
  //   //     price: infoList.price,
  //   //     amount: infoList.amount,
  //   //   });
  //   // } else {
  //   addItem({
  //     name: infoList.name,
  //     description: infoList.description,
  //     image: infoList.image,
  //     price: infoList.price,
  //     amount: infoList.amount,
  //     id: infoList.id,
  //   });
  // };

  //Hoje eu consigo salvar vários pedidos de itens iguais, mas quando vou pra outro produto
  //essa listagem zera, como salvar isso globalmente?
  // const [productInfo, setProductInfo] = useState([]);
  // const setInfo = cartItem => {
  //   const helper = cartItem;
  //   setProductInfo([...productInfo, helper]);
  // };
  // console.log(productInfo);

  return (
    <View>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
        <Text>{item.name}</Text>
        <Heart>
          <Favorite />
        </Heart>
      </Header>
      <Image source={{uri: formatUrl(item.image)}} />
      <Text style={{marginBottom: 20}}>{item.description}</Text>
      <AddItens>
        <Left>
          <Text>Total</Text>
          <Text>R$ {formatPrice(item.price)}</Text>
        </Left>
        <Right>
          <Button
            onPress={() => {
              if (amount > 0) {
                setAmount(amount - 1);
              }
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
      <AddToCart
        onPress={() => {
          if (amount > 0) {
            const cartItem = {
              ...item,
              amount: amount,
            };
            addItem(cartItem);
            navigation.navigate('Cart', {
              item: itensList,
            });
          }
        }}>
        <TextButton>Adicionar ao carrinho</TextButton>
      </AddToCart>
    </View>
  );
};

export default Details;
