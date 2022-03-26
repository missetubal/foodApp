import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: space-between;
`;

export const Image = styled.Image`
    margin-left: 5px;
    margin-right: 5px;
    width: 155px;
    height: 103px;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const Content = styled.TouchableOpacity`
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 6px 6px 20px rgba(154, 159, 174, 0.2);
    border-radius: 10px;
    margin-bottom: 20px;
    margin-right: 20px;
`;

export const Text = styled.Text`
    margin-left: 10px;
    margin-bottom: 10px;
`;