import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Logo, Start, Title } from './style';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
      <Container>
        <Logo/>
        <Title>Lanches DuBom</Title>
        <Image source={{uri:'https://www.imagensempng.com.br/wp-content/uploads/2021/06/Hamburguer-salada-Png-800x445.png'}}/>
        <Start>
          <Text>Vamos começar?</Text>
        </Start>
      </Container>
  );
}

export default Home;