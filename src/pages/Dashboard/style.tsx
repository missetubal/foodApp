import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

export const Title = styled.Text`
  color: #fd7f20;
  margin-top: 55px;
  font-size: 18px;
  font-weight: 700;
`;

export const InputText = styled.TextInput`
  width: 80%;
  padding: 15px;
  box-shadow: 6px 6px 20px rgba(154, 159, 174, 0.2);
  background: #ffffff;
  border-radius: 30px;
  height: 40px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 40px;
`;

export const Right = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 6px 6px 20px rgba(154, 159, 174, 0.2);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 22px;
`;

export const Text = styled.Text`
  color: #fd7f20;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;
