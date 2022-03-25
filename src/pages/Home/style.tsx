import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #FD7F20;
    border-radius: 15px;
`;

export const Title = styled.Text`
    font-size: 35px;
    font-weight: 800;
    color: white;
    text-align: center;
    justify-content: center;
    margin-top: 120px;
`;

export const Logo = styled.View`
    background-color: white;
    width: 73px;
    height: 73px;
    border-radius: 50px;
    margin-left: 50px;
    margin-top: 100px;
    /* background-image: var(image); */
`;

export const Image = styled.Image`
    /* background-image: url('https://www.imagensempng.com.br/wp-content/uploads/2021/06/Hamburguer-salada-Png-800x445.png'); */
    width: 60px;
`;

export const Start = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    position: absolute;
`;
