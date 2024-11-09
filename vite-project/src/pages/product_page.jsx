import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ProductPage() {

const [productModified, setProductModified] = useState();
const navigate = useNavigate();
const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                const ProductReadableData = products.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
                setProducts(json);
                console.log(json, 'products');
            })
            .catch(error => console.error(error));
    }, [productModified]);

  return (
    <Box>
      <IconButton onClick={() => navigate('/')}>
        <ArrowBackIcon />
        <Typography>Back</Typography>
      </IconButton>
        {
          blogs.length === 0 ?
           <Box width="100vw" height="100vh" display='flex' flexDirection='column' justifyContent='center' alignItems='center'><Typography variant='h5'>There is no blogs yet.</Typography>
            <Button variant='contained' color='secondary' onClick={() => navigate('/')}>Go to Home</Button>
          </Box> : 
          <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" justifyContent="center" gap="20px">
          {
            blogs.map((blogObject, index) => <BlogCard blogModified={(dataModified) => setBlogModified(dataModified)} key={index} data={blogObject} />)
          }
          </Box>
        }
    </Box>
  )
}