import styled from 'styled-components/native';

export const View = styled.View`
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 75px;
  align-items: center;
`;

export const Text = styled.Text`
  margin-left: 17px;
  font-size: 18px;
  font-weight: 500;
`;

export const Image = styled.Image`
  margin-top: 42px;
  width: 350px;
  height: 300px;
  margin-bottom: 24px;
  border-radius: 10px;
`;

export const AddItens = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: column;
`;

export const Right = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fd7f20;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 6px 6px 20px rgba(154, 159, 174, 0.2);
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  margin-left: 3px;
  margin-right: 3px;
`;

export const AddToCart = styled.TouchableOpacity`
  background-color: #fd7f20;
  border-radius: 10px;
  margin-top: 27px;
  position: absolute;
  bottom: -200px;
  width: 100%;
  left: 20px;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: white;
  font-weight: 700;
  line-height: 21px;
  margin: 12px 0px;
`;

export const Heart = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
`;
