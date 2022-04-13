import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 15px;
  width: 100%;
  /* box-shadow: 6px 6px 20px rgba(154, 159, 174, 0.2); */
  border: 1px solid rgba(154, 159, 174, 0.2);
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
`;

export const Left = styled.View``;

export const Center = styled.View`
  margin-left: 15px;
`;

export const ImageItem = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: #fd7f20;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const Text = styled.Text``;
