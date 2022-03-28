import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';

// import { Container } from './styles';

const Cart: React.FC = () => {
  // const [modaVisible, setModalVisible] = useState(false)
  const navigation = useNavigation();
  return (
    // <View>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      {/* <LeftArrow /> */}
    </TouchableOpacity>
  );
};

export default Cart;
