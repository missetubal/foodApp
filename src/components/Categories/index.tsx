import React, { useEffect, useState } from 'react';
import { Container, Image, ScrollView } from './style';
import api from '../../service/api';

// import { Container } from './styles';


const Categories: React.FC = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        api.get('products')
            .then(data => setCategory(data.data))
            .catch(error => console.log(error))
    }, [])

    const formatUrl = (url: String) => url.replace('http', 'https');

    return (
        <ScrollView horizontal >
            {
                category?.map(item => (
                    <Container>
                        <Image resizeMode='stretch' source={{ uri: formatUrl(item.image) }} />
                    </Container>
                ))
            }
        </ScrollView>

    );
}

export default Categories;