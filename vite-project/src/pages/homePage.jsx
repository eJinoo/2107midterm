import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import ProductCard from '../components/product_card';


function HomePage(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                setProducts(json);
                console.log(json, 'products');
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="20px">
        {
            products.map((productObject, index) => <ProductCard key={index} data={productObject} />)
        }
        </Box>
    )
}

export default HomePage;