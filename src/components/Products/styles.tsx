import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
`;

export const Image = styled.Image`
  margin-left: 5px;
  margin-right: 5px;
  width: 155px;
  height: 103px;
  border-radius: 10px;
`;

export const Content = styled.View`
  flex-direction: column;
  background: #ffffff;
  box-shadow: 6px 6px 20px rgba(154, 159, 174, 0.2);
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  max-width: 185px;
`;

export const Text = styled.Text`
  margin-left: 10px;
  margin-bottom: 10px;
  max-width: 123px;
`;

export const Right = styled.View``;

export const Left = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const InfoContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
`;
